import { zxRequestInstnace } from '../request/index'
export function fetchVideoInfo(videoID) {
  return zxRequestInstnace.get({
    url: `/mv/detail?mvid=${videoID}`
  })
}