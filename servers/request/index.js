import { BASE_URL, BASE_URL_BACKUP } from './config'

class zxRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  request(options) {
    const { url } = options
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseUrl ? this.baseUrl + url : url,
        success: res => resolve(res),
        fail: err => reject(err)
      })
    })
  }
  get(options) {
    return this.request({
      ...options, method: 'GET'
    })
  }
  post(options) {
    return this.request({
      ...options, method: 'POST'
    })
  }
}

// export const zxRequestInstnace = new zxRequest(BASE_URL)
export const zxRequestInstnace = new zxRequest(BASE_URL_BACKUP)

