
Component({
  properties: {
    title: {
      type: String,
      value: 'default title'
    },
    hasMore: {
      type: Boolean,
      value: true
    }
  },
  data: {

  },
  methods: {
    onMoreTapped() {
      this.triggerEvent('moreTapped')
    }
  }
})
