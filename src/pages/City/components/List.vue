<template>
  <!--ref标签可以获取dom-->
  <div class="list" ref="wrapper">
    <!--better-scroll只作用于第一个元素-->
    <div>

      <CommonAnimate >
        <!--v-if v-else 用于多元素vue 动画，相应位置设置不同key才可以重新渲染dom-->
        <div class="listIn"  v-if="selectedNum===1" key="out">
          <div class="section">
            <div class="title">热门城市</div>
            <ul class="content" >
              <li v-for="item of hotCitys" :key="item.id" @click="clickCity(item.name)">{{item.name}}</li>
            </ul>
          </div>
          <div class="section" v-for="(item,key) of citys" :key="key">
            <div class="title" :ref="key">{{key}}</div>

            <ul class="content">
              <li v-for="innerItem of item" @click="clickCity(innerItem.name)">{{innerItem.name}}</li>
            </ul>
          </div>
        </div>

        <div class="listOut"  v-else="selectedNum===2" key="in">
          <div class="section">
            <div class="title">热门城市</div>
            <ul class="content">
              <li v-for="item of hotCitys" :key="item.id" @click="clickCity(item.spell)">{{item.spell}}</li>
            </ul>
          </div>
          <div class="section" v-for="(item,key) of citys" :key="key">
            <div class="title" :ref="key">{{key}}</div>
            <ul class="content">
              <li v-for="innerItem of item" :key="innerItem.id" @click="clickCity(innerItem.spell)">
                {{innerItem.spell}}
              </li>
            </ul>
          </div>
        </div>
      </CommonAnimate>

    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import CommonAnimate from 'common/animate/AnimateAnimation'

  export default {
    name: "List",
    data() {
      return {
        selectedNum: 1,
      }
    },
    components: {
      CommonAnimate,
    },
    props: {
      citys: Object,
      hotCitys: Array,
      letter: String,
    },
    methods: {

      clickCity(city) {
        //vuex第一种做法
        this.$store.dispatch('changeCity',city)
        //第二种直接调用commit
        // this.$store.commit('changeCity', city)
        // console.log(1);
        this.$router.push('/')
      }
    },
    mounted() {
      const options = {
        mouseWheel: true,
        click: true,
        taps: true       //手机浏览器下better-scroll中click事件,链接无效的问题
      }
      this.scroll = new Bscroll(this.$refs.wrapper,options)
    },


    created() {
      var that = this;
      //通过总线传数据给兄弟组件
      this.$root.Bus.$on('send', function (val) {
        that.selectedNum = val;
        // console.log(val);
        // console.log(that.selectedNum);
      })
    },

    watch: {
      letter() {
        if (this.letter) {
          let element = null;
          if (this.selectedNum === 1) {
            element = this.$refs[this.letter][0]
            // console.log(element);
            //better-scroll插件的函数，页面跳转
            this.scroll.scrollToElement(element)
          }
          else if (this.selectedNum === 2) {
            element = this.$refs[this.letter][0]
            // console.log(element);

            this.scroll.scrollToElement(element)
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .list
    position: absolute
    top: 1.7rem
    left: 0
    right: 0
    bottom: 0
    overflow hidden
    padding-right: .4rem
    .section
      .title
        font-size: .24rem;
        line-height: 0.7rem
        background: $bgTextColor
        height: .7rem
        padding-left: .4rem
      .content
        overflow: hidden
        position: relative
        li
          float: left
          color: #212121;
          width: 33.3%
          border-bottom: 1px solid #ddd
          box-sizing border-box
          line-height .86rem
          height: .86rem
          text-align: center
          margin-bottom: -1px;
          cursor : pointer
        &:after
          left: 33.3%
          width 33.3%
          content: "";
          height: 100%
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd
          position: absolute;
          top: 0
          z-index: -1
</style>
