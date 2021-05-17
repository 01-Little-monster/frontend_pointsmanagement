<template>
  <div>
    <tab-bar>
      <tab-bar-item activeStyle="#a35555" path="/home">
        <i slot="tabbar-icon" class="el-icon-house"></i>
        <i slot="tabbar-active-icon" class="el-icon-s-home"></i>
        <div slot="tabbar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item activeStyle="#a35555" path="/ranking">
        <i slot="tabbar-icon" class="el-icon-s-data"></i>
        <i slot="tabbar-active-icon" class="el-icon-s-data"></i>
        <div slot="tabbar-text">排行榜</div>
      </tab-bar-item>
      <tab-bar-item activeStyle="#a35555" path="/exchange">
        <i slot="tabbar-icon" class="el-icon-goods"></i>
        <i slot="tabbar-active-icon" class="el-icon-s-goods"></i>
        <div slot="tabbar-text">兑换中心</div>
      </tab-bar-item>
      <tab-bar-item activeStyle="#a35555" path="/corps">
        <i slot="tabbar-icon" class="el-icon-user"></i>
        <i slot="tabbar-active-icon" class="el-icon-user-solid"></i>
        <div slot="tabbar-text">团队管理</div>
      </tab-bar-item>
      <tab-bar-item activeStyle="#a35555" path="/profile">
        <i slot="tabbar-icon" class="el-icon-setting"></i>
        <i slot="tabbar-active-icon" class="el-icon-s-tools"></i>
        <div slot="tabbar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabBar/TabBar'
  import TabBarItem from '@/components/common/tabBar/TabBarItem'
  export default {
    name: 'MaintabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>
<style scoped>

</style>
