<template>
  <div>
    <top-title><div>登录页面</div></top-title>
    <form class="login-form">
      <div>工号：<input type="text" v-model="user_id"></div>
      <div>密码：<input type="password" v-model="user_password"></div>
      <!-- <button>登录</button> -->
      <el-row><el-button type="primary" round class="login-click" @click="loginClick()">登录</el-button></el-row>
    </form>
    <block-tab-bar>
      <div slot="text">请先登录</div>
    </block-tab-bar>
  </div>
</template>

<script>
import TopTitle from 'components/common/toptitle/TopTitle.vue'
import BlockTabBar from 'components/common/blockTabBar/BlockTabBar.vue'


  export default {
    name: 'Index',
    components: {
      TopTitle,
      BlockTabBar,
    },
    data() {
      return {
        user_id: '',
        user_password: ''
      }
    },
    methods: {
      loginClick: function() {
        const data = {
          user_id: this.user_id,
          user_password: this.user_password
        }
        console.log(data)
        this.$request({
          method: 'post',
          url: '/login/index',
          data,
        })
      }
    }
  }

</script>
<style scoped>
  .login-form {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 150px;
    margin-top: 40px;
    text-align: center;
    line-height: 40px;
  }
  .login-click {
    width: 150px;
    margin-top: 20px;
  }
</style>