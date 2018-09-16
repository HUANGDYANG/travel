// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //自动寻找文件
import store from './store/index'
import fastClick from 'fastclick'    //解决移动端点击事件300ms延迟问题
import 'style/reset.css'       //style是webpack基本配置中的别名,resolve中
import 'style/border.css'   //解决物理像素和css像素问题！Retina 屏
import 'style/iconfont.css'   //全局引入字体图标
import 'babel-polyfill'     //es6兼容包
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import Footer from 'common/footer/Footer'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
    Bus:new Vue()  //借助中央数据总线进行兄弟组件通信
  },
  components: {
    App ,
    // Footer
  },
  template: '<App/>'
})
