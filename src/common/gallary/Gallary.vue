<template>
  <div class="gallary" @click="closeGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="item.index">
          <div>
            <img class="wrapper-img" :src="item" alt="">
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    props:{
      imgs: {
        type:Array,
        default() {
          return []
        }
      }
    },
    methods:{
      closeGallary() {
        this.$emit('close')
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType:'fraction',
          observeParents:true, //监听父元素dom变化时刷新
          observer:true   //监听自己元素dom变化时刷新
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .gallary >>> .swiper-container
    overflow :inherit
  .gallary
    background-color: #000
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: flex
    justify-content :center
    flex-direction :column
    z-index :2
    .wrapper
      width: 100%
      height: 0
      padding-bottom:90%
      .wrapper-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom:-2rem
</style>
