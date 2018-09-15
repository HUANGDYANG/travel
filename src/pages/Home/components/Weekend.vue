<template>
  <div>
    <div class="title">周末去哪儿</div>
    <router-link tag="div" class="content" v-for="item of list" :to=" '/detail/' + item.id" :key="item.id">
        <div class="content-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="name">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array,
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/mixins.styl"

  .title
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
    margin-top: .26rem

  .content
    margin-bottom: .2rem
    .content-img
      overflow: hidden
      height: 0
      padding-bottom: 37.4375%
      img
        width: 100%
    .name
      color: #212121
      font-size: .28rem
      line-height: .48rem
      text-indent: .26rem
      ellipsis()
    .desc
      color: #616161
      font-size: .24rem
      line-height: .42rem
      text-indent: .26rem
      ellipsis()

</style>
