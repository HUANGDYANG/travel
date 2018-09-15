<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe697;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      输入城市/景点/美食
    </div>

    <router-link to="/City">
    <div class="header-right">
      {{this.$store.state.city}}
      <span class="iconfont">&#xe6a6;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HeaderHome",

  }
</script>

<style lang="stylus" scoped>
  /*@import "~@/assets/style/varibles.styl"  //@表示src目录，~在css引入css时使用*/
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .header
    line-height: 0.86rem
    height: .86rem  //1rem = html fontsize = 50px,这里是43px
    display: flex
    background: $bgColor
    color: #fff
    overflow:hidden
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        font-size: 0.4rem
        text-align: center
    .header-input
      flex : 1
      height:.64rem
      line-height: .64rem
      margin-top:.12rem
      background: #ffffff
      border-radius : .1rem
      margin-left:.2rem
      padding-left: .2rem
      color: #ccc
    .header-right
      width:1.8rem
      float: right
      text-align: center
      color: #fff
      ellipsis()

</style>
