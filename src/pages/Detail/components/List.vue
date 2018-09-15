<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>

      <div v-for="(subItem,index) of item.children" :key="index">

        <div class="item-content border-bottom">
          <div class="item-sub-title">{{subItem.title}}</div>
          <div class="item-price">
            <span class="price">{{subItem.price}}</span>起
            <span class="iconfont" v-bind:class="{arrow:showDeatil===item.id}" @click="clickArrow(item.id)">&#xe6a6;</span>
          </div>
        </div>

        <div class="item-detail border-bottom" v-if="showDeatil===item.id" v-for="(ssubItem,index) of subItem.children" :key="index" >

          <div class="item-detail-left">
            <div class="item-detail-title">【当天可订】广州长隆野生动物世界节生动物世界节假日成人票</div>
            <div class="detail-time">9月15日</div>
            <span class="return">条件退</span>
            <div class="provider">
              <span>广州金马国旅</span> | <span>预定须知 ></span>
            </div>
          </div>

          <div class=" item-detail-right">
            <div class="detail-price">$355</div>
            <div class="btn-pre">预定</div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      list: Array
    },
    data() {
      return {
        showDeatil: 0
      }
    },
    methods: {
      clickArrow(idd) {
        if(idd===this.showDeatil) this.showDeatil = 0
        else
        this.showDeatil = idd
      }
    }
  }
</script>

<style scoped lang="stylus">

  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem

  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem

  .item-content
    overflow: hidden
    padding: .2rem
    .item-sub-title
      float: left
      color: #333
      font-size: .3rem
      line-height: .48rem
    .item-price
      float: right
      font-size: 12px
      color: #ccc
      .price
        color: orange
        font-size: .4rem

  .item-detail
    display: flex
    justify-content space-between
    background-color: #f5f5f5
    padding: .2rem
    .item-detail-left
      width: 80%
    .item-detail-right
      flex: 1
      text-align: center
      color: orange
      font-size: .4rem
      margin-top: .4rem
    .item-detail-title
      font-size: .3rem
    .detail-time
      font-size: .1rem
      margin-top: .15rem
      margin-bottom: .1rem
    .return
      border: 1px solid #ccc
      font-size: .15rem
      color: red
    .provider
      font-size: .12rem
      margin-top: .15rem
    .btn-pre
      padding: .15rem .35rem
      background-color: orange
      color: #fff
      font-size: .3rem
      border-radius: .05rem
      margin-top: .1rem
  .arrow
    transform :rotateZ(180deg)
    display :inline-block
</style>
