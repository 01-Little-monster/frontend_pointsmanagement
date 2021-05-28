// 不需要 tabBar 组件的页面，就在路由跳转的时候使用改方法
export const isSwitch = () => {
  this.$store.commit({
    type: 'changing_over_false',
    callback: () => {
      console.log(this.$store.state.isCut)
    }
  })
}