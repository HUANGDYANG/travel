<template>
  <div>
    <div class="title">
      <span class="iconfont icon-like">&#xe60f;
       </span>
      猜你喜欢
    </div>
    <ul class="content" v-for="item of list">
      <li class="item">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <div class="name">{{item.title}}</div>
          <div class="comment">0条评论</div>
          <div class="bottom">
            <span class="price">35元起</span>
            <span class="attr">汕尾市</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Like",
    props:{
      list:Array
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/mixins.styl"
  .title
    margin-top:.46rem
    .icon-like
      color: red
      padding-left: .26rem
  .content
    .item
      padding:.2rem 0rem .2rem .2rem
      overflow:hidden
      border-bottom:1px solid #ccc
      margin-bottom:.2rem
      .item-img
        float: left
        overflow: hidden
        width: 2rem
        height: 2rem
        margin-right:.26rem
        img
          width: 100%
      .item-content
        .name
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
          padding-bottom:.2rem
        .comment
          color: #616161;
          font-size: .24rem;
          line-height: .34rem
          padding-bottom:.2rem

        .bottom
          padding-bottom:.2rem

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
            width:1rem
</style>
