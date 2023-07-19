import { zxRequestInstnace } from '../request/index'
export function fetchVideos(limit, offset) {
  return zxRequestInstnace.get({
    url: `/top/mv`,
    data: {
      limit, offset,
    }
  })
}