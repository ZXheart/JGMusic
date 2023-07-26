import { recommendStore } from '../../store/recommend'

Page({
  data: {
    recommend: []
  },
  // custom event
  stateChange(value) {
    this.setData({ recommend: value })
  },
  // Local API
  onLoad() {
    recommendStore.onState('recommend', this.stateChange)
  },
  onUnload() {
    recommendStore.offState('recommend', this.stateChange)
  }
})