import { zxRequestInstnace } from '../request/index'
export function fetchRecommend(type) {
  return zxRequestInstnace.get({
    url: `/playlist/detail?id=${type}`
  })
}