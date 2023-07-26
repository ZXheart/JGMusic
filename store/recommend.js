import { HYEventStore } from "hy-event-store"
import { fetchRecommend } from "../servers/index"

export const recommendStore = new HYEventStore({
  state: {
    musicType: [3779629, 2884035, 19723756, 3778678],//3778678: recommend, 
    recommend: []
  },
  actions: {
    async getRecommend(ctx) {
      const res = await fetchRecommend(ctx.musicType[3])
      ctx.recommend = res.data.playlist.tracks
    }
  }
})