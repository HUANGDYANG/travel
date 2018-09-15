<!--本页面真机测试(除了火狐手机浏览器)有问题，暂时无解-->
<template>
  <div>
    <div class="header-abs " v-show="showAbs" @click="clickFbs">
      <span class="iconfont back-icon">&#xe697</span>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="header-left" @click="clickFbs">
        <span class="back-icon iconfont">&#xe697</span>
      </div>
      景区介绍
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        showAbs:true,
        opacityStyle: {
          opacity: 0
        }
      }
    },

    methods:{
      clickFbs() {
        this.$router.push('/')
      },
      scrollWindow() {
        // console.log(1);
        const top = document.documentElement.scrollTop ;
        if(top>30) {
          this.showAbs = false ;
          let opacity = top/150 ;
          opacity = opacity>1 ? 1 : opacity ;
          this.opacityStyle={opacity:opacity}
        } else {
          this.showAbs = true ;
        }
      }
    },
    //页面展示时执行,因为用了keepalive
    activated() {
      window.addEventListener('scroll',this.scrollWindow)
    },
    deactivated() {
      window.removeEventListener('scroll' ,this.scrollWindow)  //解绑对window的全局滚动事件，防止其他页面生效
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .header-abs
    z-index :1
    position: fixed
    top: .2rem
    left: .2rem
    right: 0
    border-radius: .36rem
    background: rgba(0, 0, 0, .5)
    width: .72rem
    height: .72rem
    text-align: center
    line-height: .72rem
    .back-icon
      color: #ffffff
      font-size: .6rem
  .header-fixed
    z-index :1
    position: fixed
    top: 0
    right: 0
    left: 0
    line-height: 0.86rem
    height: .86rem
    background: $bgColor
    color: #fff
    text-align: center
    padding-right:.64rem
    font-size:.3rem
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        font-size: 0.6rem
        text-align: center

</style>
