<template>
  <div class="top-title">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TopTitle'
  }

</script>
<style scoped>
  .top-title {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 20px;
    font-weight: 800;
    border-radius: 0 0 3px 3px;
    background-color: #86c3ff;
    /* box-shadow: 0px 1px 0px 1px #ececec; */
     box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.1);
  }
</style>
