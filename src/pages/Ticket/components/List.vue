<template>
  <div>
    <ul class="content" v-for="item of list" :key="item.id">
      <li class="item">
        <div class="item-img">
          <img :src="item.imgUrl"
               alt="">
        </div>
        <div class="item-content">
          <div class="name">{{item.title}}</div>
          <div class="comment">{{item.desc}}</div>
          <div class="bottom">
            <span class="price">35元起</span>
            <span class="attr">北京市</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      list:Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/mixins.styl"
  .content
    .item
      padding: .2rem 0rem .2rem .2rem
      overflow: hidden
      border-bottom: 1px solid #ccc
      margin-bottom: .2rem
      .item-img
        float: left
        overflow: hidden
        width: 2rem
        height: 2rem
        margin-right: .26rem
        img
          width: 100%
      .item-content
        .name
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
          padding-bottom: .2rem
        .comment
          color: #616161;
          font-size: .24rem;
          line-height: .34rem
          padding-bottom: .2rem

        .bottom
          padding-bottom: .2rem

        .price
          float: left
          font-size: .4rem;
          color: #ff8300;
        .attr
          float: right
          color: #616161;
          font-size: .24rem;
          line-height: .4rem;
          ellipsis()
          width: 1rem
</style>

