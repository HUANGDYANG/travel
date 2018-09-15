import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'北京'
  },
  // 第一种做法(List.vue)
  actions:{
    changeCity(ctx,city) {
      ctx.commit('changeCity',city)   //commit 到 mutations 里的方法
    }
  },
  mutations:{
    changeCity(state,city) {
      state.city = city
    }
  }
})
