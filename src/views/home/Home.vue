<template>
  <div>
    <tab-nav>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-nav-box">
        <el-tab-pane label="积分任务" name="mission">积分任务</el-tab-pane>
        <el-tab-pane label="活动展示" name="activity">活动展示</el-tab-pane>
        <el-tab-pane label="奖品预告" name="prize">奖品预告</el-tab-pane>
      </el-tabs>
    </tab-nav>
  </div>
</template>

<script>
import TabNav from '@/components/common/tabNav/TabNav.vue'
  export default {
    name: 'Home',
    components: {
      TabNav
    },
    data() {
      return {
        activeName: 'mission'
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
