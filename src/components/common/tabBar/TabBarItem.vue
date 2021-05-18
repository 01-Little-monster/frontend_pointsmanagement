<template>
  <div class="tab-bar-item" @click="itemLink">
    <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar-active-icon"></slot></div>
    <div :style="activeColor"><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeStyle: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeColor() {
        return this.isActive ? { color: this.activeStyle } : {}
      }
    },
    methods: {
      itemLink() {
        this.$router.replace(this.path).catch(err => {})
      }
    }
  }

</script>
<style scoped>
  .tab-bar-item {
		flex: 1;
		text-align: center;
	}
  .tab-bar-item i {
		font-size: 20px;
    margin-top: 8px;
    margin-bottom: 2px;
	}
</style>
