<template>
  <div class="choice">
    <ul class="inout">
      <li class="in" :class="{inserve:selectedNum===1}" v-on:click="clickIn">境内</li>
      <li class="out" :class="{inserve:selectedNum===2}" v-on:click="clickOut">境外丶港澳台</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "choice",
    data() {
      return {
        selectedNum:1
      }
    },

    methods:{
      clickIn :function () {
        this.selectedNum = 1 ;
        this.$root.Bus.$emit('send',1);

      },
      clickOut: function () {
        this.selectedNum = 2 ;
        this.$root.Bus.$emit('send',2)
      },
    },

  }
</script>

<style scoped lang="stylus">
  @import "~style/varibles.styl"
  .choice
    overflow :hidden
    height: .86rem
    line-height: .86rem
    color: #ffffff
    text-align: center
    background-color: $bgColor
    padding:0 1rem
    .inout
      margin: 0 auto
      height: .4rem
      line-height: .4rem
      margin-top:0.13rem
      .in
        float: left
        text-align: center
        width: 50%
        box-sizing border-box
        border: 1px solid #ffffff
      .out
        float: left
        text-align: center
        width: 50%
        border: 1px solid #ffffff
        box-sizing border-box
      .inserve
        background-color: white
        color: $bgColor
</style>
