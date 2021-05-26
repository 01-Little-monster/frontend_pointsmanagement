<template>
  <div>
    <main-top></main-top>
    <main-avatar-unit></main-avatar-unit>
  </div>
</template>
<script>

import MainTop from '@/components/content/MainTop/MainTop.vue'
import MainAvatarUnit from 'components/content/mainAvatarUnit/MainAvatarUnit.vue'
  export default {
    name: 'Profile',
    components: {
      MainTop,
      MainAvatarUnit
    },
  }

</script>
<style scoped>

</style>
