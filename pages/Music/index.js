import { fetchBanner, fetchPlaylist } from '../../servers/index'
import { recommendStore } from '../../store/recommend'

Page({
  data: {
    deviceType: 2,  //0: PC; 1: android; 2: iphone; 3: ipad  
    bannerList: [],
    partialRecommned: [],
    partialPlaylist: []
  },
  // Network requests
  async getBanner() {
    const res = await fetchBanner(this.data.deviceType)
    const pictureLinks = []
    res.data.banners.forEach(item => {
      pictureLinks.push(item.pic)
    })
    this.setData({ bannerList: pictureLinks })
  },
  async getPlaylist() {
    const res = await fetchPlaylist()
    this.setData({ partialPlaylist: res.data.playlists })
    console.log(this.data.partialPlaylist)
  },
  // custom method
  onSearchTapped() {
    wx.navigateTo({
      url: '/pages/MusicSearch/index',
    })
  },
  recommendedMore() {
    wx.navigateTo({
      url: '/pages/RecommendedMore/index',
    })
  },
  // Local API
  onLoad() {
    this.getBanner()

    recommendStore.onState('recommend', value => {
      this.setData({ partialRecommned: value?.slice(0, 6) })
    })
    recommendStore.dispatch('getRecommend')

    this.getPlaylist()
  }
})