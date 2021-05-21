<template>
  <div class="avatar-unit-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AvatarUnitBox'
  }

</script>
<style scoped>
  .avatar-unit-box {
    font-size: 16px;
    display: flex;
    justify-content: center;
		position: fixed;
		top: 40px;
		left: 0;
		right: 0;
    background-color: #f8fbff;
  }
</style>
