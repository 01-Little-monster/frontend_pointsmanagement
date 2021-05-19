<template>
  <div>
    <tab-nav>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-nav-box">
        <el-tab-pane label="注册/注销" name="users_operation">注册/注销</el-tab-pane>
        <el-tab-pane label="审批" name="batch">审批</el-tab-pane>
        <el-tab-pane label="积分管理" name="integral">积分管理</el-tab-pane>
      </el-tabs>
    </tab-nav>
  </div>
</template>

<script>
import TabNav from '@/components/common/tabNav/TabNav.vue'
  export default {
    name: 'Corps',
    components: {
      TabNav
    },
    data() {
      return {
        activeName: 'users_operation'
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
    flex: 1;
		text-align: center;
  }
</style>
