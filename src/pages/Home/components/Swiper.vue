<template>
  <swiper :options="swiperOption" class="wrapper" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id" >
      <img class="swiper-img" :src=item.imgUrl alt="">
    </swiper-slide>


    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
  </swiper>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props :{
      list:Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000
        },
      }
    },
    computed: {
      //防止轮播图没从第一张开始
      showSwiper() {
        return this.list.length
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet
    background: #000

  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  //.wrapper解决先后显示问题，宽高比例自适应
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%

  .swiper-img
    width: 100%
</style>
