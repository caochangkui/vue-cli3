<template>
  <div id="city">
    <!-- <img src="/logo.png" alt="" height="10px"> -->
    <div class="word" v-show="showWord">
      <span>{{letter}}</span>
    </div>
    <div class="title">城市选择</div>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityList,
    CityAlphabet
  },
  data () {
    return {
      showWord: false,
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/mock/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res.data)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      console.log(letter)
      this.letter = letter
      this.showWord = true
      setTimeout(() => {
        this.showWord = false
        console.log(this.showWord)
      }, 500)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
.title {
  line-height: 40px;
  background: #10d1eb;
  color: #fff;
}
.word {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.word span {
  display: inline-block;
  height: 60px;
  width: 60px;
  background: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
