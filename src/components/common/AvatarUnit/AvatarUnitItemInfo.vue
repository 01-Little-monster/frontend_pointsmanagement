<template>
  <div class="user-info">
    <div class="user-name"><slot name="user-name"></slot></div>
    <div class="user-id"><slot name="user-id"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'AvatarUnitItemInfo'
  }

</script>
<style scoped>
  .user-info {
    text-align: left;
  }
  .user-name span,
  .user-id span {
    display: block;
    overflow: hidden;
    padding: 5px 10px;
    font-size: 14px;
  }
  .user-name span {
    padding: 10px 10px 2px 10px;
    color: #303133;
    /* font-size: 16px; */
    font-weight: 700;
  }
  .user-id span {
    color: #909399;
    font-weight: 200;
  }
</style>
