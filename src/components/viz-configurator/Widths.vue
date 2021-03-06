<template lang="pug">
.width-panel
  .widgets
    .widget
        b-select.selector(expanded v-model="dataColumn")
          option(label="None" value="")
          optgroup(v-for="dataset in datasetChoices"
                  :key="dataset" :label="dataset")
            option(v-for="column in numericColumnsInDataset(dataset)" :value="`${dataset}/${column}`" :label="column")

  .widgets
    .widget
      p Scaling
      b-field
        b-input(:disabled="!dataColumn" v-model="xscaleFactor" placeholder="1.0" type="number")

  //- .widgets
  //-   .widget
  //-     p Transform
  //-     b-field.has-addons
  //-       p.control(v-for="transform of transforms" :key="transform")
  //-         b-button.is-small(
  //-           :disabled="!dataColumn"
  //-           :class="{'is-warning': dataColumn && transform==selectedTransform}"
  //-           @click="selectedTransform=transform"
  //-           :title="dataColumn ? 'Transforms occur after scaling':'Select a data field first'"
  //-           ) {{ transform }}

</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { VizLayerConfiguration, DataTable, DataType } from '@/Globals'

export type WidthDefinition = {
  dataset?: string
  columnName: string
  scaleFactor?: number
}

@Component({ components: {}, props: {} })
export default class VueComponent extends Vue {
  @Prop() vizConfiguration!: VizLayerConfiguration
  @Prop() datasets!: { [id: string]: DataTable }

  private transforms = ['none', 'sqrt', 'pow5']
  private dataColumn = ''
  private xscaleFactor = '100'
  private selectedTransform = this.transforms[0]

  private datasetLabels = [] as string[]

  private mounted() {
    this.datasetsAreLoaded()
  }

  @Watch('vizConfiguration')
  private vizConfigChanged() {
    const config = this.vizConfiguration.display?.width
    if (config?.columnName) {
      const selectedColumn = `${config.dataset}/${config.columnName}`
      this.dataColumn = selectedColumn
      this.datasetLabels = [...this.datasetLabels]
    }
  }

  @Watch('datasets')
  private datasetsAreLoaded() {
    const datasetIds = Object.keys(this.datasets)
    const { dataset, columnName, scaleFactor } = this.vizConfiguration.display.width
    if (dataset && columnName) {
      console.log('SPECIFIED WIDTH: ', dataset, columnName, scaleFactor)
      this.dataColumn = `${dataset}/${columnName}`
      if (!!scaleFactor) this.xscaleFactor = '' + scaleFactor
    } else if (datasetIds.length) {
      const secondColumn = Object.keys(this.datasets[datasetIds[0]])[1]
      if (secondColumn) this.dataColumn = `${datasetIds[0]}/${secondColumn}`
    }
    this.datasetLabels = datasetIds
  }

  @Watch('xscaleFactor')
  @Watch('dataColumn')
  private emitWidthSpecification() {
    const slash = this.dataColumn.indexOf('/')

    if (slash === -1) {
      this.clickedSingle()
      return
    }

    const dataset = this.dataColumn.substring(0, slash)
    const columnName = this.dataColumn.substring(slash + 1)

    const width: WidthDefinition = {
      dataset,
      columnName,
      scaleFactor: parseFloat(this.xscaleFactor),
    }

    setTimeout(() => this.$emit('update', { width }), 50)
  }

  private clickedSingle() {
    const width: WidthDefinition = {
      dataset: '',
      columnName: '',
      scaleFactor: parseFloat(this.xscaleFactor),
    }

    // the link viewer is on main thread so lets make
    // sure user gets some visual feedback
    setTimeout(() => this.$emit('update', { width }), 50)
  }

  private get datasetChoices(): string[] {
    return this.datasetLabels.filter(label => label !== 'csvBase')
  }

  private numericColumnsInDataset(datasetId: string): string[] {
    const dataset = this.datasets[datasetId]
    if (!dataset) return []
    const allColumns = Object.keys(dataset).filter(
      // skip first row, it has ID
      (colName, i) => i > 0 && dataset[colName].type === DataType.NUMBER
    )

    return allColumns
  }
}
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.width-panel {
  padding-right: 0rem;
}

.widgets {
  display: flex;
  margin-bottom: 0.5rem;

  p {
    margin-top: 5px;
    font-size: 1rem;
    margin-right: 1rem;
  }
}

.widget {
  flex: 1;
  margin-right: 0.75rem;
}

.selector {
  margin-top: 0.75rem;
  overflow-x: auto;
  max-width: 100%;
}
</style>
