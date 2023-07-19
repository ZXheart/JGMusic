import { zxRequestInstnace } from '../request/index'
export function fetchVideoURL(videoID) {
  return zxRequestInstnace.get({
    url: `/mv/url?id=${videoID}`
  })
}