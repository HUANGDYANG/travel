<template>
  <div>
    <h3 class="title ">用户评论</h3>
    <div class="content border-top" v-for="item of commentList" :key="item.id">
      <div class="top">
        <span class="score">{{item.score}}</span>
        <p>
          <span class="username">{{item.username}}</span>
          <span class="time">{{item.time}}</span>
        </p>
      </div>
      <p class="bottom" :class="{showBottom:showArr[item.id]}">
        {{item.content}}
      </p>
      <div class="iconfont icon-arrow" :class="{iconUp:showArr[item.id]}" @click="clickArrow(item.id)">&#xe6a6;</div>
      <div class="img">
        <div v-for="(imgItem) of item.imgs" :key="imgItem.index">
          <img :src="imgItem" alt="" @click="clickImg">
        </div>

      </div>
      <RollinAnimation>
        <Gallary :imgs="item.imgs" v-show="showGallary" @close="closeGallary"></Gallary>
      </RollinAnimation>
    </div>
    <div class="lookAll">查看全部评论 ></div>
  </div>
</template>

<script>
  import Gallary from '../../../common/gallary/Gallary'
  import RollinAnimation from '../../../common/animate/RollinAnimation'

  export default {
    name: "comment",
    components: {
      Gallary: Gallary,
      RollinAnimation: RollinAnimation
    },
    props: {
      commentList: Array,
      imgs: Array
    },
    data() {
      return {
        showArr: [0, false, false],
        showGallary: false
      }
    },
    methods: {
      closeGallary() {
        this.showGallary = false
      },
      clickImg() {
        this.showGallary = true
      },
      clickArrow(id) {
        this.showWhich = id
        //使用变异方法才能检测数组的变化
        // console.log(this.showArr[id]);
        this.showArr.splice(id, 1, !this.showArr[id])
      }
    }
    // created() {
    //   for (let i = 1; i < this.commentList.length; i++) {
    //     this.showArr[i] = false
    //   }
    // }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .title
    font-size: .3rem
    color: #333
    padding: 0rem .2rem
    margin: .4rem 0 .4rem .2rem
    border-left: 2px solid $bgColor

  .top
    display: flex
    justify-content: space-between
    padding: .4rem .2rem 0 .2rem
    .score
      color: orange
    .username
      font-size: .1rem

  .content
    margin-top: .4rem

  .bottom
    padding: .2rem
    color: #333
    word-break: break-all;
    word-wrap: break-word;
    line-height: .42rem;
    font-size: .26rem;
    overflow: hidden
    height: 1.9rem

  .icon-arrow
    text-align: center

  .iconUp
    transform: rotateZ(180deg)

  .showBottom
    overflow: visible
    height: auto

  .lookAll
    text-align: center
    border-top: 1px dashed #ccc
    height: .42rem
    line-height: .42rem
    font-size: .09rem
    padding: .2rem

  .img
    padding: .2rem
    display: flex
    flex-wrap: wrap
    width: 100%
    box-sizing: border-box
    height: 0
    padding-bottom: 47%
    overflow: hidden
    div
      width: 32%
      margin-right: 2%
      margin-bottom: .1rem
    div:nth-of-type(3n)
      margin-right: 0
    img
      width: 100%
</style>
