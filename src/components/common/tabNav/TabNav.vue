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
    justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
    /* background-color: #f8fbff; */
	}
</style>