<template>
  <div>
    <ul class="list">
      <!--@touchstart.prevent用了这个火狐浏览器下点击事件失效-->
      <li class="item" v-for="item of letters" :key="item" @click="clickAlpha" @touchstart.prevent="touchStart"
          @touchmove="touchMove" @touchend="touchEnd" :ref="item">{{item}}
        <!--:ref = "item.name"无效-->
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Alphabet",
    props: {
      citys: Object,
    },
    data() {
      return {
        touchState: false,
        startY: 0,
        timer: null,
      }
    },
    computed: {
      letters() {
        const letters = [];
        //i是字母，原因不明
        for (let i in this.citys) {
          letters.push(i);
        }
        return letters;
      }
    },
    //页面数据更新(渲染完成后)执行,这里优化性能了
    updated() {
      this.startY = this.$refs['A'][0].offsetTop  //距离choice组件的高
    },
    methods: {
      clickAlpha(e) {
        // console.log(e.target.innerText);
        this.$emit('change', e.target.innerText)
      },

      touchStart() {
        this.touchState = true;

      },

      //这里有点难
      touchMove(e) {
//定时器做节流操作
        if (this.touchState) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            // console.log(index);
            if (index >= 0 && index <= this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      touchEnd() {
        this.touchState = false
      },

    }
  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .list
    position: absolute
    right: 0
    bottom: 0
    top: 1.7rem
    display: flex
    justify-content: center
    flex-direction: column
    width: .4rem
    background-color: $bgTextColor
    .item
      text-align: center
      line-height: .4rem;
      color: $bgColor
</style>
