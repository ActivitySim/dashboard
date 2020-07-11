import AsyncBackgroundWorker, {
  MethodCall,
  MethodResult,
} from '@/visualization/frame-animation/modell/background/AsyncBackgroundWorker'
import { InitParams, MethodNames } from '@/visualization/transit-supply/XmlFetcherContract'

import * as BlobUtil from 'blob-util'
import pako from 'pako'
import xml2js from 'xml2js'
import globalConfig from '@/config/Config'

class XmlFetcher extends AsyncBackgroundWorker {
  private params!: InitParams

  public handleInitialize(call: MethodCall) {
    this.params = call.parameters as InitParams
  }

  public async handleMethodCall(call: MethodCall): Promise<MethodResult> {
    switch (call.method) {
      case MethodNames.FetchXML:
        return this.fetchXml()
      default:
        throw new Error('No method with name ' + call.method)
    }
  }

  private async fetchWithAuth() {
    const url = `${globalConfig.fileServer}/projects/${this.params.projectId}/files/${this.params.fileId}`
    const headers = new Headers()
    headers.append('Authorization', 'Bearer ' + this.params.accessToken)

    const response = await fetch(url, { mode: 'cors', credentials: 'include', headers: headers })

    return await response.blob()
  }

  private async fetchXml() {
    console.log({ WORKER_STARTING_UP: this.params })

    const blob = await this.fetchWithAuth()
    const data = await this.getDataFromBlob(blob)
    const xml = await this.parseXML(data)

    console.log({ WORKER_DONE: xml })
    return { data: xml, transferrables: [] }
  }

  private async getDataFromBlob(blob: Blob) {
    // TEMP HACK. Need user agent to determine whether GZIP is regular (Chrome)
    // or double (firefox).  Can add others later.
    console.log(navigator.userAgent)

    let isFirefox = true
    // are we on windows
    if (navigator.appVersion.indexOf('Win') > -1) {
      isFirefox = navigator.userAgent.indexOf('like Gecko') === -1
    }

    console.log('IS FIREFOX on WINDOWS: ' + isFirefox)

    const data: any = await BlobUtil.blobToArrayBuffer(blob)

    try {
      // try single-gzipped
      const gunzip1 = pako.inflate(data, { to: 'string' })
      if (gunzip1.startsWith('<?xml')) return gunzip1

      // try double-gzipped
      const dgunzip1 = pako.inflate(data)
      const gunzip2 = pako.inflate(dgunzip1, { to: 'string' })
      if (gunzip2.startsWith('<?xml')) return gunzip2
    } catch (e) {
      // it's ok if it failed because it might be text vvvv
    }

    // try text
    const text: string = await BlobUtil.blobToBinaryString(blob)
    return text
  }

  private parseXML(xml: string): Promise<string> {
    const parser = new xml2js.Parser({ preserveChildrenOrder: true, strict: true })
    return new Promise((resolve, reject) => {
      parser.parseString(xml, function(err: Error, result: string) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

// make the typescript compiler happy on import
export default null as any

// bootstrap when worker is loaded
const worker = new XmlFetcher()
