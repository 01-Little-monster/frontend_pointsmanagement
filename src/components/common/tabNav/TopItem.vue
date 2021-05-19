<template>
  <div class="top-item">
    <div class="top-item-left"><slot name="item-1"></slot></div>
    <div class="top-item-right">
      <div><slot name="item-2"></slot></div>
      <div><slot name="item-3"></slot></div>
      <div><slot name="item-4"></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopItem'

  }

</script>
<style scoped>
  .top-item {
    position: relative;
    width: 100%;
    height: 30px;
    text-align: center;
    margin-top: 10px;
  }
  .top-item-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
  }
  .top-item-right {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
  }
  .top-item-left i,
  .top-item-right i {
    flex: center;
    font-size: 18px;
    line-height: 30px;
  }
</style>
