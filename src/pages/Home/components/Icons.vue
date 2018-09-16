<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <router-link tag="div" :to="'/Ticket/'+ item.id" class="icon" v-for="item of page" :key="item.id">
          <img class="icon-img" :src=item.imgUrl alt="">
          <p>{{item.desc}}</p>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          freeMode:true,
        },

      }
    },
    props:{
      list:Array
    },
    computed : {
      pages() {
        const pages=[]
        this.list.forEach((item,index) => {
          const page = Math.floor(index/8)
          if(!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages;
      }
    }
  }
</script>
!
<style scoped lang="stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 3.4rem
    margin-top: 0.2rem
    .icon
      width: 25%
      padding-bottom: 1.5rem
      float: left
      height: 0
      text-align: center
      /*vertical-align center*/
      .icon-img
        width: 1.1rem
        height: 1.1rem
        margin-bottom: 0.1rem
      p
        color: $darkTextColor
        ellipsis()
</style>
