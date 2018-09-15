<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "FadeAnimation"
  }
</script>

<!--transition自动 找到 v开头的css样式-->
<style scoped lang="stylus">
  .v-enter, .v-leave-to
    opacity :0
  .v-enter-active,.v-leave-active
    transition: opacity .3s
</style>
