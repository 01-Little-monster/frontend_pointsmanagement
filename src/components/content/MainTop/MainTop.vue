<template>
  <div>
    <tab-nav>
      <top-item>
        <i class="el-icon-switch-button" slot="item-1"></i>
        <i class="el-icon-search" slot="item-2"></i>
        <i class="el-icon-setting" slot="item-3"></i>
        <i class="el-icon-bell" slot="item-4"></i>
      </top-item>
    </tab-nav>
  </div>
</template>

<script>
import TabNav from '@/components/common/tabNav/TabNav.vue'
import TopItem from 'components/common/tabNav/TopItem.vue'
// import {isSwitch} from 'common-js/isSwitch.js'
  export default {
    name: 'MainTop',
    components: {
      TabNav,
      TopItem
    },
    methods: {
      

    }
  }
</script>
<style scoped>
  .tab-nav {
    background-color: #f8fbff;
  }
</style>
