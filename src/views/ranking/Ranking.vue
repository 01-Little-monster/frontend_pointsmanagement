<template>
  <div>
    <tab-nav>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-nav-box">
        <el-tab-pane label="日榜" name="day">日榜</el-tab-pane>
        <el-tab-pane label="周榜" name="week">周榜</el-tab-pane>
        <el-tab-pane label="月榜" name="month">月榜</el-tab-pane>
        <el-tab-pane label="年度榜" name="year">年度榜</el-tab-pane>
      </el-tabs>
    </tab-nav>
  </div>
</template>

<script>
import TabNav from '@/components/common/tabNav/TabNav.vue'
  export default {
    name: 'Ranking',
    components: {
      TabNav
    },
    data() {
      return {
        activeName: 'day'
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
  .tab-position {
    margin: 0 auto;
  }
</style>
