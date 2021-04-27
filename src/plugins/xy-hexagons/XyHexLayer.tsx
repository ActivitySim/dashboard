import React, { useState, useMemo, useEffect } from 'react'
import { InteractiveMap } from 'react-map-gl'
import { ArcLayer } from '@deck.gl/layers'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import DeckGL from '@deck.gl/react'

import { MAP_STYLES } from '@/Globals'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoidnNwLXR1LWJlcmxpbiIsImEiOiJjamNpemh1bmEzNmF0MndudHI5aGFmeXpoIn0.u9f04rjFo7ZbWiSceTTXyA'

// const ambientLight = new AmbientLight({
//   color: [255, 255, 255],
//   intensity: 1.0,
// })

// const pointLight1 = new PointLight({
//   color: [255, 255, 255],
//   intensity: 0.8,
//   position: [-0.144528, 49.739968, 80000],
// })

// const pointLight2 = new PointLight({
//   color: [255, 255, 255],
//   intensity: 0.8,
//   position: [-3.807751, 54.104682, 8000],
// })

// const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 })

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
}

const INITIAL_VIEW_STATE = {
  zoom: 10,
  minZoom: 3,
  maxZoom: 20,
  pitch: 20,
  bearing: 0,
}

export const colorRange = {
  light: [
    [250, 245, 120],
    [255, 210, 90],
    [180, 240, 150],
    [70, 220, 150],
    [40, 110, 250],
    [140, 0, 40],
  ],
  dark: [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78],
  ],
}

function getTooltip({ object }: any) {
  if (!object || !object.position || !object.position.length) {
    return null
  }

  const lat = object.position[1]
  const lng = object.position[0]
  const count = object.points.length

  return {
    text: `\
    ${count} Pickups
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    `,
  }
}

export default function Layer({
  data = [],
  highlights = [],
  dark = false,
  radius = 100,
  upperPercentile = 100,
  coverage = 0.6,
  extrude = true,
  maxHeight = 200,
  center = [11.34, 48.3],
  onClick = {} as any,
}) {
  const [lon, lat] = center
  const initialView = Object.assign(INITIAL_VIEW_STATE, { longitude: lon, latitude: lat })

  function handleClick(target: any) {
    onClick(target)
  }

  const layers = [
    new ArcLayer({
      id: 'arc-layer',
      data: highlights,
      pickable: false,
      getWidth: 3,
      opacity: 0.4,
      getSourcePosition: (d: any) => d[0],
      getTargetPosition: (d: any) => d[1],
      getSourceColor: dark ? [255, 192, 228] : [255, 0, 0],
      getTargetColor: dark ? [255, 228, 240] : [0, 128, 255],
    }),
    ,
    new HexagonLayer({
      id: 'hexlayer',
      colorRange: dark ? colorRange['dark'] : colorRange['light'],
      coverage,
      data,
      autoHighlight: true,
      elevationRange: [0, maxHeight],
      elevationScale: data && data.length ? 50 : 0,
      extruded: extrude,
      getPosition: (d: any) => d,
      pickable: true,
      opacity: dark && highlights.length ? 0.6 : 0.8,
      radius,
      upperPercentile,
      material,
      transitions: {
        elevationScale: { type: 'interpolation', duration: 1000 },
        opacity: { type: 'interpolation', duration: 200 },
      },
    }),
  ]

  return (
    /*
    //@ts-ignore */
    <DeckGL
      layers={layers}
      // effects={[lightingEffect]}
      initialViewState={initialView}
      controller={true}
      getTooltip={getTooltip}
      onClick={handleClick}
    >
      {
        /*
        // @ts-ignore */
        <InteractiveMap
          reuseMaps
          mapStyle={dark ? MAP_STYLES.dark : MAP_STYLES.light}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      }
    </DeckGL>
  )
}
