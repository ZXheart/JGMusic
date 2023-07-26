import { zxRequestInstnace } from '../request/index'
export function fetchBanner(type) {
  return zxRequestInstnace.get({
    url: `/banner?type=${type}`
  })
}