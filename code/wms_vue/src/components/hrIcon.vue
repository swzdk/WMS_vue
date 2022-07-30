<template>
  <i :class="`iconfont iconhr-${icon}`"></i>
</template>

<script>
export default {
  name: 'HrIcon',
  props: {
    icon: {
      // type: String,
      required: true
    }
  }
}
</script>

<style>
</style>