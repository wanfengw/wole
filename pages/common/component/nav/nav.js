Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {

  },
  data: {
    list: [
      {
        id: '0',
        open: false,
      }, {
        id: '1',
        open: false,
      }, {
        id: '2',
        open: false,
      }, {
        id: '3',
        open: false,
      }, {
        id: '4',
        open: false,
      }, {
        id: '5',
        open: false,
      }, {
        id: '6',
        open: false,
      }, {
        id: '7',
        open: false,
      }
    ],
    showSide: "none"
  },
  methods: {
    a(e) {
      console.log(e);
    },
    kindToggle(e) {
      const id = e.currentTarget.id
      console.log(e)
      const list = this.data.list
      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.setData({
        list
      })
    },
    hideSide(e) {
      console.log(e)
      this.setData({
        showSide: "none"
      })
    },
    showSide(e) {
      console.log(e)
      this.setData({
        showSide: "block"
      })
    }
  }
})