<template>
  <div>
    <div class="banner" @click="clickGallary">
      <img class="banner-img"
           :src="bannerImg" alt="">
      <div class="banner-title">
        {{this.sightName}}
      </div>
      <div class="banner-number">
        <span class="iconfont img-icon">&#xe600;</span>
        {{this.gallaryImgs.length}}
      </div>
    </div>

    <CommonFade>
    <CommonGallary :imgs = "gallaryImgs" v-show="showGallary" @close="closeGallary"></CommonGallary>
    </CommonFade>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import CommonFade from 'common/fade/Fadeanimation'

  export default {
    name: "Banner",
    components: {
      CommonGallary,
      CommonFade,
    },
    props: {
      sightName:String,
      bannerImg:String,
      gallaryImgs:Array,
    },
    data() {
      return {
        showGallary:false,
      }
    },
    methods:{
      clickGallary() {
         this.showGallary = true
      },
      closeGallary() {
        this.showGallary = false
      }
    },

  }
</script>

<style scoped lang="stylus">

  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-title
      font-size: .4rem
      color: #ffffff
      padding: .3rem
      position: absolute
      left: 0
      bottom: 0
      right: 0
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    //创建渐变效果:顶部开始向下不透明化
    .banner-number
      position: absolute
      left: 0
      bottom: .8rem
      color: #ffffff
      width: 1.2rem
      height: .4rem
      line-height: .4rem
      margin-left: .3rem
      background: rgba(0, 0, 0, .5);
      border-radius: .2rem;
      font-size: .24rem;
      text-align: center
      .img-icon
        font-size: .12rem
</style>
