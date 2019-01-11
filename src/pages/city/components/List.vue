<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, index) in cities"
        :key="index"
        :ref="index"
      >
        <div class="title">{{index}}</div>
        <div
          class="item-list"
          v-for="innerItem in item"
          :key=innerItem.id
          @click="handleCityClick(innerItem.name)"
          >
          <div class="item"> {{innerItem.name}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },

}
</script>

<style scoped>
.list {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.title {
  line-height: 40px;
  background: #eee;
  padding-left: 10px;
  color: #666;
  font-size: 14px;
  text-align: left;
}
.button-list {
  overflow: hidden;
  padding: 10px 30px 10px 10px;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 4px;
  padding: 4px 0;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
}
.item {
  line-height: 40px;
  padding-left: 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
}
</style>
