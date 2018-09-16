<template>
  <HomeFade>
    <div>

      <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
      <DetailHeader></DetailHeader>
      <div class="bg"></div>
      <DetailList :list="categoryList"></DetailList>
      <div class="bg"></div>
      <DetailComment :commentList="commentList"></DetailComment>
      <Footer></Footer>
    </div>
  </HomeFade>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import DetailComment from './components/comment'
  import Footer from '../../common/footer/Footer'
  import HomeFade from '../../common/fade/FadeAnimation'
  import axios from 'axios'

  export default {
    name: "Detail",
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: [],
        commentList: [],
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
      DetailComment,
      Footer,
      HomeFade
    },
    // mounted(){
    //   this.getDetailInfo()
    // },
    //用了keepalive，上面的方法只执行一次ajax请求,所以用下面的钩子
    activated() {
      this.getDetailInfo()
    },

    methods: {
      getDetailInfo() {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id  //动态路由携带参数
          }
        }).then(this.getDetailInfoSucc)
      },

      getDetailInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
          this.commentList = data.commentList
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .bg
    background-color: #f5f5f5
    height: .1rem

  .content
    height: 50rem
</style>
