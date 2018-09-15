<!--animate.css 和 vue 封装的动画组件-->
<template>
  <transition enter-active-class="animated rollIn" >
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: "AnimateAnimation",
  }
</script>

<style scoped lang="stylus">
  @import "~style/animate.styl"
</style>
