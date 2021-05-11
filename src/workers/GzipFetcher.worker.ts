// --- WORKER PREAMBLE ---------------------------------------
// This lets typescript know we are in a worker, not a window
const ctx: Worker = self as any
// make the typescript compiler happy on import
export default null as any
// -----------------------------------------------------------

// import readBlob from 'read-blob'
// import pako from 'pako'

// import globalStore from '@/store'
// import HTTPFileSystem from '@/util/HTTPFileSystem'

onmessage = ({ data: { filename } }: MessageEvent) => {
  console.log('got ', filename)

  ctx.postMessage({ answer: 42 })
}

// const fetchXml = (E:any) => {
//     const fileSystem = this.getFileSystem(this.params.fileApi)
//     const httpFileSystem = new HTTPFileSystem(fileSystem)

//     console.log({ fileSystem })

//     const blob = await httpFileSystem.getFileBlob(this.params.filePath)
//     if (!blob) throw Error('BLOB IS NULL')

//     const data = await this.getDataFromBlob(blob)
//     const xml = await this.parseXML(data)

//     return { data: xml, transferrables: [] }
//   }

//   private async newGetDataFromBlob(blob: Blob) {
//     const data: any = readBlob.arraybuffer(blob)

//     try {
//       // try single-gzipped
//       const gunzip1 = pako.inflate(data, { to: 'string' })
//       if (gunzip1.startsWith('<?xml')) return gunzip1
//     } catch (e) {
//       // it's ok if it failed because it might be text vvvv
//     }

//     // try text
//     const text: string = await readBlob.text(blob)
//     return text
//   }

//   private async getDataFromBlob(blob: Blob) {
//     // TEMP HACK. Need user agent to determine whether GZIP is regular (Chrome)
//     // or double (firefox).  Can add others later.
//     console.log(navigator.userAgent)

//     let isFirefox = true
//     // are we on windows
//     if (navigator.appVersion.indexOf('Win') > -1) {
//       isFirefox = navigator.userAgent.indexOf('like Gecko') === -1
//     }

//     console.log('IS FIREFOX on WINDOWS: ' + isFirefox)

//     const data: any = await readBlob.arraybuffer(blob)

//     try {
//       // try single-gzipped
//       const gunzip1 = pako.inflate(data, { to: 'string' })
//       if (gunzip1.startsWith('<?xml')) return gunzip1

//       // try double-gzipped
//       const dgunzip1 = pako.inflate(data)
//       const gunzip2 = pako.inflate(dgunzip1, { to: 'string' })
//       if (gunzip2.startsWith('<?xml')) return gunzip2
//     } catch (e) {
//       // it's ok if it failed because it might be text vvvv
//     }

//     // try text
//     const text: string = await readBlob.text(blob)
//     return text
//   }
