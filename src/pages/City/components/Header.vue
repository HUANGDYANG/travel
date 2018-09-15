<template>
  <div>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="back-icon iconfont">&#xe697</div>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Header"
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .header
    height: .86rem
    line-height: .86rem
    background-color: $bgColor
    position: relative
    top: 0
    left: 0
    text-align: center
    color: #fff

    .back-icon
      position: absolute
      top: 0
      left: 0
      width: 0.64rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>
