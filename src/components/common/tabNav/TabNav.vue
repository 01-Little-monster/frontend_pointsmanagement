<template>
  <div class="tab-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabNav'
  }

</script>
<style scoped>
  .tab-nav {
    font-size: 12px;
		display: flex;
		position: fixed;
		top: 0;
		left: 10px;
		right: 10px;
	}
</style>