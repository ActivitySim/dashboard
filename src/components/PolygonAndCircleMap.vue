<template lang="pug">
.map(:id="mapID")
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { GeoJsonLayer } from '@deck.gl/layers'
import { scaleLinear, scaleThreshold } from 'd3-scale'
import colormap from 'colormap'

import LayerManager from '@/js/LayerManager'
import { ScatterplotLayer } from '@deck.gl/layers'

const SCALED_COLORS = scaleThreshold()
  .domain([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
  .range([
    [26, 152, 80],
    [102, 189, 99],
    [166, 217, 106],
    [217, 239, 139],
    [255, 255, 191],
    [254, 224, 139],
    [253, 174, 97],
    [244, 109, 67],
    [215, 48, 39],
    [168, 0, 0],
  ] as any)

@Component({ components: {} })
export default class VueComponent extends Vue {
  @Prop({ required: true })
  private props!: {
    data: any[]
    dark: boolean
    colors: string
    activeColumn: string
    maxValue: number
    opacity: number
    useCircles: boolean
    expColors: boolean
  }

  private layerManager!: LayerManager
  private mapID = `map-id-${Math.floor(1e12 * Math.random())}`

  private get viewState() {
    return this.$store.state.viewState
  }

  @Watch('viewState') viewMoved() {
    this.layerManager.deckInstance.setProps({ viewState: this.viewState })
  }

  @Watch('props.dark') swapTheme() {
    this.layerManager.updateStyle()
  }

  @Watch('props')
  private handlePropsChanged() {
    if (this.layerManager) this.updateLayers()
  }

  private mounted() {
    this.setupLayerManager()
    this.updateLayers()
  }

  private beforeDestroy() {
    this.layerManager.destroy()
  }

  private setupLayerManager() {
    this.layerManager = new LayerManager()

    this.layerManager.init({
      container: `#${this.mapID}`,
      viewState: this.$store.state.viewState,
      pickingRadius: 3,
      getTooltip: this.getTooltip,
      onViewStateChange: ({ viewState }: any) => {
        this.$store.commit('setMapCamera', viewState)
      },
    })
  }

  private handleClick() {
    console.log('click!')
  }

  private getTooltip(hoverInfo: any) {
    const { object, x, y } = hoverInfo
    if (!object) return

    if (object.properties.centerX) delete object.properties.centerX
    if (object.properties.centerY) delete object.properties.centerY

    // round fractions
    for (const key of Object.keys(object.properties)) {
      const value = object.properties[key]
      if (!isNaN(value)) {
        object.properties[key] = Math.round(1000 * value) / 1000
      }
    }

    // try to figure out how tall it is? So tooltip doesn't go below the screen bottom
    let tooltipHeight = 24 + 22 * Object.keys(object.properties).length
    if (y + tooltipHeight < window.innerHeight) tooltipHeight = 0

    let html = `<div id="shape-tooltip" class="tooltip">`
    for (const [key, value] of Object.entries(object.properties)) {
      html = html + `<div>${key}:&nbsp;<b>${value}</b></div>`
    }

    return {
      html,
      style: {
        backgroundColor: this.props.dark ? '#445' : 'white',
        color: this.props.dark ? 'white' : '#222',
        fontSize: '0.9rem',
        padding: '1rem 1rem',
        position: 'absolute',
        left: x + 10,
        top: y - tooltipHeight,
        boxShadow: '0px 2px 10px #22222266',
        opacity: 0.8,
      },
    }
  }

  private updateLayers() {
    const builtColors = colormap({
      colormap: this.props.colors,
      nshades: 20,
      format: 'rba',
    }).map((a: number[]) => [a.slice(0, 3)])

    const fetchColor = scaleThreshold()
      .domain(new Array(20).fill(0).map((v, i) => 0.05 * i))
      .range(builtColors)

    this.layerManager.removeLayer('shapefileLayer')
    this.layerManager.removeLayer('scatterplot-layer')
    this.layerManager.addLayer(
      this.props.useCircles
        ? new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: this.props.data,
            pickable: true,
            opacity: 0.01 * this.props.opacity,
            stroked: true,
            filled: true,
            radiusScale: 2,
            radiusMinPixels: 3,
            radiusMaxPixels: 250,
            radiusUnits: 'pixels',
            lineWidthMinPixels: 1,
            getPosition: (d: any) => d.geometry.coordinates,
            getRadius: (d: any) => 15 * Math.sqrt(d.properties.value / this.props.maxValue),

            getFillColor: (d: any) => {
              const v = d.properties[this.props.activeColumn]
              if (isNaN(v)) return this.props.dark ? [100, 100, 100] : [200, 200, 200]

              let ratio = v / this.props.maxValue
              if (this.props.expColors) ratio = Math.sqrt(ratio)

              const c = fetchColor(ratio) as any
              if (c) return c[0]

              return undefined
            },
            getLineColor: this.props.dark ? [100, 100, 100] : [255, 255, 255],
            parameters: {
              depthTest: false,
            },
          })
        : new GeoJsonLayer({
            id: 'shapefileLayer',
            data: this.props.data,
            filled: true,
            lineWidthUnits: 'pixels',
            lineWidthMinPixels: 1,
            pickable: true,
            stroked: true,
            opacity: 0.01 * this.props.opacity,
            autoHighlight: true,
            highlightColor: [255, 0, 200],
            parameters: {
              depthTest: false,
            },

            getLineColor: this.props.dark ? [96, 96, 96, 96] : [192, 192, 192, 64],
            getFillColor: (d: any) => {
              const v = d.properties[this.props.activeColumn]
              if (isNaN(v)) return this.props.dark ? [40, 40, 40] : [224, 224, 224, 128]

              let ratio = v / this.props.maxValue
              if (this.props.expColors) ratio = Math.sqrt(ratio)

              const c = fetchColor(ratio) as any
              if (c) return c[0]

              return undefined
            },
            // SCALED_COLORS(f.properties[this.props.activeColumn] / this.props.maxValue),
            getLineWidth: 1,
            getTooltip: this.getTooltip,
            updateTriggers: {
              getFillColor: {
                dark: this.props.dark,
                colors: this.props.colors,
                activeColumn: this.props.activeColumn,
                maxValue: this.props.maxValue,
              },
            },

            transitions: {
              getFillColor: 250,
            },
          })
    )
  }
}
</script>
