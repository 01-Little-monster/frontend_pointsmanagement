<template>
  <div class="block-tab-bar">
    <slot name="text"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BlockTabBar'
  }

</script>
<style scoped>
  .block-tab-bar {
    z-index: 999;
    font-size: 12px;
		height: 55px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #ffffff;
    text-align: center;
    line-height: 55px;
    color: #606266;
  }
  .block-tab-bar div {
    width: 100%;
  }
</style>
