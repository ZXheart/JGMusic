import { zxRequestInstnace } from '../request/index'
export function fetchRelatedVideos(videoID) {
  return zxRequestInstnace.get({
    url: `/related/allvideo?id=${videoID}`
  })
}