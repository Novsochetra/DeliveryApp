import * as qs from 'qs'
// import { Platform } from 'react-native'
// import { IAuthorization } from '../../types/auth'

export const env = {
  base: 'http://192.168.2.85:3000',
  //   apiKey: '5batbh525jaUB2uhn3czFLu98FvvPXBy',
}

type Headers = { [key: string]: string }

export type APIParams = { [key: string]: any }
export type APIHeaderParams = {
  //   authorization: IAuthorization | null
  //   guestSessionToken: string | null
}

export function makeHeaders(_params: APIHeaderParams): Headers {
  const headers = {}
  return headers
}

export function makeURL(path: string): string {
  return env.base + path
}

export function GET(path: string, params: APIParams, headerParams: APIHeaderParams): Request {
  let url = makeURL(path)
  if (Object.keys(params).length > 0) {
    url += '?' + qs.stringify(params)
  }
  return new Request(url, {
    method: 'GET',
    headers: makeHeaders(headerParams),
  })
}

export function POST(path: string, params: APIParams, headerParams: APIHeaderParams): Request {
  const url = makeURL(path)
  const headers = makeHeaders(headerParams)
  const isFormData = params instanceof FormData
  headers['Content-Type'] = isFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
  const body = isFormData ? params : qs.stringify(params)

  return new Request(url, {
    method: 'POST',
    headers,
    body,
  })
}

export async function fetchJson(req: Request): Promise<any> {
  const resp = await fetch(req)
  if (resp.ok) {
    const json = await resp.json().catch(() => {
      throw new APIError(resp, null)
    })
    return json
  } else {
    const text = await resp.text()
    let json
    try {
      json = JSON.parse(text)
    } catch (e) {
      debugLog(text)
    }
    throw new APIError(resp, json)
  }
}

export class APIError extends Error {
  code: string | null = null

  message = ''
  errors: any
  response: Response

  detail: any

  constructor(resp: Response, json: any) {
    super()
    this.name = 'APIError'
    this.stack = new Error().stack
    if (json?.error) {
      this.code = json.error.code
      this.message = json.error.message

      if (json.error.detail) {
        this.errors = json.error.detail
      }
    } else {
      this.message = resp.statusText
    }
    this.response = resp
    this.detail = json
  }
}

function debugLog(param: any): void {
  if (__DEV__) {
    console.log(param)
  }
}
