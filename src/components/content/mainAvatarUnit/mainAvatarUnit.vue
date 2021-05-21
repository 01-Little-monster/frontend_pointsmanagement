<template>
  <div id="profile">
    <avatar-unit-box>
      <avatar-unit-item>
        <el-row class="demo-avatar demo-basic" slot="item-left">
          <el-col :span="12">
          <div class="demo-basic--circle">
          <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
          </div>
          </el-col>
        </el-row>
        <div slot="item-center">
          <avatar-unit-item-info>
            <span slot="user-name">小小怪</span>
            <span slot="user-id">工号：001</span>
          </avatar-unit-item-info>
        </div>
        <div slot="item-right">
          <i class="el-icon-position"></i>
        </div>
      </avatar-unit-item>
    </avatar-unit-box>
  </div>
</template>

<script>
import AvatarUnitBox from '@/components/common/AvatarUnit/AvatarUnitBox.vue'
import AvatarUnitItem from '@/components/common/AvatarUnit/AvatarUnitItem.vue'
import AvatarUnitItemInfo from '@/components/common/AvatarUnit/AvatarUnitItemInfo.vue'
  export default {
    name: 'MainAvatarUnit',
    components: {
      AvatarUnitBox,
      AvatarUnitItem,
      AvatarUnitItemInfo
    },
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    }
  }

</script>
<style scoped>
  /* #profile {
    width: 100%;
    height: 1000px;
    background-color: #f8fbff;
  } */
</style>
