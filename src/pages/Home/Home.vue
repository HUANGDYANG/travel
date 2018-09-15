<template>
  <div>
    <HeaderHome ></HeaderHome>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconsList"></HomeIcons>
    <HomeWeekend :list = "weekendList"></HomeWeekend>
    <HomeLike :list="likeList"></HomeLike>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderHome from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeWeekend from './components/Weekend'
  import HomeLike from './components/Like'
  import Footer from '../../common/footer/Footer'

  import axios from 'axios'


  export default {
    name: "Home",
    components: {
      HeaderHome,
      HomeSwiper,
      HomeIcons,
      HomeWeekend,
      HomeLike,
      Footer
    },

    data() {
      return  {
        swiperList:[],
        weekendList:[],
        likeList:[],
        iconsList:[],
      }
    },

    methods: {
      getHomeInfo() {
        axios.get('/api/index.json').then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        // console.log(res);
        res = res.data ;
        if(res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.weekendList = data.weekendList
          this.likeList = data.recommendList
          this.iconsList = data.iconsList
        }
      }
    },

    mounted() {
      this.getHomeInfo()
    },

  }
</script>

<style scoped>

</style>
