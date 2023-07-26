import { fetchVideoURL, fetchVideoInfo, fetchRelatedVideos } from '../../servers/index'
Page({
  data: {
    itemid: 0,
    videoURL: '',
    videoInfo: {},
    showMoreDesc: false,
    relatedVideos: []
  },
  onLoad(options) {
    this.data.itemid = options.id
    this.getVideoURL()
    this.getVideoInfo()
    this.getRelatedVideos()
  },

  async getVideoURL() {
    const res = await fetchVideoURL(this.data.itemid)
    this.setData({ videoURL: res.data.data.url })
  },
  async getVideoInfo() {
    const res = await fetchVideoInfo(this.data.itemid)
    this.setData({ videoInfo: res.data.data })
  },
  async getRelatedVideos() {
    const res = await fetchRelatedVideos(this.data.itemid)
    // here no response data 
    // this.setData({ videoInfo: res.data.data })
  },
  showMore() {
    this.setData({ showMoreDesc: !this.data.showMoreDesc })
  }
})