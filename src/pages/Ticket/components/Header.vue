<template>
  <div>
    <div class="header">
      <router-link tag="div" to="/" class="header-left">
        <div class="iconfont back-icon">&#xe697;</div>
      </router-link>
      <input type="text" class="header-input " placeholder="输入城市或景点" v-model="keyword">
      <div class="header-right">
        搜索
      </div>
    </div>
    <div class="panel">
      <ul class="" v-for="item of resList" :key="item.id">
        <router-link class="item" tag="li" :to="'/detail/' + item.id">{{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      list: Array
    },
    data() {
      return {
        keyword: '',
        resList: [],
        timer: null
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let res = []
          for (let i = 0; i < this.list.length; i++) {
            if (this.keyword !== '' && this.list[i].title.indexOf(this.keyword) > -1) {
              res.push(this.list[i])
            }
          }
          this.resList = res
          console.log(1, this.resList);
        }, 100)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .header
    line-height: 0.86rem
    height: .86rem //1rem = html fontsize = 50px,这里是43px
    display: flex
    background: $bgColor
    color: #fff
    overflow: hidden
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        font-size: 0.4rem
        text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      background: #ffffff
      border-radius: .1rem
      margin-left: .2rem
      padding-left: .2rem
      color: #666
      text-align: center
    .header-right
      width: 1rem
      float: right
      text-align: center
      color: #fff
      ellipsis()

  .panel
    background-color: #f5f5f5
    position: absolute
    left: 0
    right: 0
    .item
      border-bottom: 1px solid #ccc
      text-indent:.5rem
      height :.5rem
      line-height: .5rem
      font-size:.3rem
</style>
