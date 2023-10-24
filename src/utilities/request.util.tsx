import axios from 'axios'
import { baseUrl } from './config.rest'
import LynxStorages from './storage.util'

interface IRequestPayloads<T = any> {
  url: string
  method: 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'POST'
  headers?: any
  data?: T
}

interface IResponsePayloads<T = any> {
  data: T
  page?: number
  pageSize?: number
  total?: number
}

const getQueryByName = (name: string, url: string) => {
  let match = RegExp('[?&]' + name + '=([^&]*)').exec(url)

  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

export default async function request<T = any, R = any>({
  url,
  method = 'GET',
  headers = {},
  data
}: IRequestPayloads<R>): Promise<IResponsePayloads<T>> {
  const [token, microKey] =
    LynxStorages.getItem('#XXTOKEN').getItem('#XXMICROKEY').data

  if (method === 'GET') {
    if (Object.getOwnPropertyNames(data || {}).length > 0) {
      url += getQueryByName('mode', url) ? '&' : '?'
      for (let i in data) {
        if (Array.isArray(data[i]) && ((data[i] || []) as any).length > 0) {
          for (let x in data[i]) {
            const itemsArr = data[i][x]
            url += `${i}[]=${itemsArr}&`
          }
        } else {
          url += `${i}=${data[i]}&`
        }
      }

      if (url[url.length - 1] === '&') {
        url = url.substring(0, url.length - 1)
      }
    }
  }

  return new Promise((resolve, reject) =>
    axios
      .request({
        url: `${baseUrl}${url}`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          Authorization: `MPP ${token}`,
          'Micro-Key': microKey
        },
        method,
        data: JSON.stringify(data)
      })
      .then(response => resolve(response.data))
      .catch(error => reject(error?.response?.data))
  )
}
