import { fetchVideos } from "../../servers/index"
Page({
  data: {
    videos: [],
    limit: 20,
    offset: 0,
    hasMore: true
  },
  async getVideos() {
    let limit = this.data.limit
    let offset = this.data.offset
    const res = await fetchVideos(limit, offset)
    const newVideos = [...this.data.videos, ...res.data.data]
    this.setData({ videos: newVideos })
    this.data.offset = offset + limit
    this.data.hasMore = res.data.hasMore
  },
  onVideoItemTap(event) {
    const itemID = event.currentTarget.dataset.itemid
    wx.navigateTo({
      url: `/pages/VideoDetails/index?id=${itemID}`,
    })
  },
  onLoad() {
    this.getVideos()
  },
  onReachBottom() {
    this.data.hasMore && this.getVideos()
  },
  async onPullDownRefresh() {
    this.setData({ videos: [] })
    this.data.limit = 20
    this.data.offset = 0
    this.data.hasMore = true
    await this.getVideos()
    wx.stopPullDownRefresh()
  }
})