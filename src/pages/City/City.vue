<template>
  <div>
    <CityHeader></CityHeader>
    <CityChoice></CityChoice>
    <CityList :citys="citys" :hotCitys = "hotCitys" :letter = "letter"></CityList>
    <CityAlphabet :citys="citys" @change = "getAlpha"></CityAlphabet>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CityChoice from './components/Choice'
  import CityList from './components/List'
  import axios from 'axios'
  import CityAlphabet from './components/Alphabet'

  export default {
    name: "City",
    components: {
      CityHeader,
      CityChoice,
      CityList,
      CityAlphabet,
    },
    data() {
      return {
        citys:{},
        hotCitys:[],
        letter:'',
      }
    },
    methods:{
      getAlpha(letter) {
        this.letter = letter ;
      },
      getCityInfo() {
        axios.get('api/city.json').then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
        res = res.data ;
        if(res.ret && res.data) {
          const data = res.data ;
          this.citys = data.citys ;
          this.hotCitys = data.hotCitys ;
        }
      }
    },
    mounted() {
      this.getCityInfo();
    },
  }
</script>

<style scoped lang="stylus">

</style>
