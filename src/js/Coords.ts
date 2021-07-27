import proj4 from 'proj4'

// interface Xy {
//   x: number
//   y: number
// }

// Add all standard MATSim projects from TransformationFactory to proj4
proj4.defs([
  [
    // south africa
    'EPSG:2048',
    '+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
  ],
  [
    // berlin
    'EPSG:31468',
    '+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs',
  ],
  [
    // cottbus
    'EPSG:25833',
    '+proj=utm +zone=33 +ellps=GRS80 +units=m +no_defs',
  ],
  [
    // ruhr
    'EPSG:25832',
    '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs',
  ],
])

// aliases for existing definitions here
proj4.defs('DK4', proj4.defs('EPSG:31468'))
proj4.defs('GK4', proj4.defs('EPSG:31468'))

// aliases for common cities
proj4.defs('Cottbus', proj4.defs('EPSG:25833'))
proj4.defs('Berlin', proj4.defs('EPSG:31468'))
proj4.defs('South Africa', proj4.defs('EPSG:2048'))

function toLngLat(projection: string, p: any) {
  return proj4(projection, 'WGS84', p) as any
}

/**
 *
 * @param def Whatever random string you have for your projection
 * @returns EPSG code in "EPSG:1234" format
 */
function guessProjection(definition: string) {
  const favoriteEPSG = ['31468', '25832', '25833', '2048', '4326', '26910']

  const lookups = {
    DHDN_3_degree_Gauss_Kruger_zone_4: 'EPSG:31468',
    NAD_1983_UTM_Zone_10N: 'EPSG:26910',
  }

  console.log(definition)
  // Simple EPSG:xxxx code? Just return it
  const epsg = /^EPSG:\d+$/
  if (epsg.test(definition)) return definition

  // Authority mentioned? Use it
  const authority = /AUTHORITY\["EPSG","\d+"\]/g
  let matches = ''
  definition
    .match(authority)
    ?.reverse()
    .map(m => (matches += m))

  if (matches) {
    for (const fave of favoriteEPSG) {
      if (matches.indexOf(`"${fave}"`) > -1) return `EPSG:${fave}`
    }
  }

  // maybe a DHDN GK4 is there
  for (const [key, epsg] of Object.entries(lookups)) {
    console.log(key, epsg)
    console.log(definition.indexOf(key))
    if (definition.indexOf(key) > -1) return epsg
  }

  // all else fails: return EPSG:31468
  return ''
}

export default { toLngLat, guessProjection }
