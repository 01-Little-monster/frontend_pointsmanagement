<template>
  <div class="avatar-uint-item">
    <div class="avatar-uint-item-left"><slot name="item-left"></slot></div>
    <div class="avatar-uint-item-center"><slot name="item-center"></slot></div>
    <div class="avatar-uint-item-right"><slot name="item-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'AvatarUnitItem'
  }

</script>
<style scoped>
  .avatar-uint-item{
    display: flex;
    position: relative;
    width: 100%;
    height: 60px;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  .avatar-uint-item-left {
    flex-grow: 1;
    height: 100%;
    text-align: center;
    margin-left: 20px;
  }
  .avatar-uint-item-left img {
    display: block;
    width: 50px;
    height: 50px;
  }
  .avatar-uint-item-center {
    flex-grow: 10;
    height: 100%;
  }
  .avatar-uint-item-right {
    position: relative;
    flex-grow: 2;
    height: 100%;
    font-size: 20px;
  }
  .avatar-uint-item-right i {
    padding: 15px 0 15px 0;
  }
</style>
