import { zxRequestInstnace } from '../request/index'
export function fetchPlaylist(cat = '全部', limit = 6, offset = 0) {
  return zxRequestInstnace.get({
    url: `/top/playlist?cat=${cat}&limit=${limit}&offset=${offset}`
  })
}