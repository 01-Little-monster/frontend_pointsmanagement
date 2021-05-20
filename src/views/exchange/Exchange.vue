<template>
  <div>
    <tab-nav>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-nav-box">
        <el-tab-pane label="兑换中心" name="exchange_core">兑换中心</el-tab-pane>
      </el-tabs>
    </tab-nav>
  </div>
</template>

<script>
import TabNav from '@/components/common/tabNav/TabNav.vue'
  export default {
    name: 'Exchange',
    components: {
      TabNav
    },
    data() {
      return {
        activeName: 'exchange_core'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }

</script>
<style scoped>
  .tab-nav-box {
		text-align: center;
  }
</style>
