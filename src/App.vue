<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <!-- <jump-index v-else></jump-index> -->
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabBar/MainTabBar'
// import JumpIndex from 'views/jump/JumpIndex.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
    // JumpIndex
  },
  methods: {
    // isSwitch_app() {
    //   this.$store.commit({
    //     type: 'changing_over_true',
    //     callback: () => {
    //       return this.$store.state.isCut
    //     }
    //   })
    //   return this.$store.state.isCut
    // }
  }
}
</script>

<style>
  @import "./assets/css/normalize.css";
</style>
