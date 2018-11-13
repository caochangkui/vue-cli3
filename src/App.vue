<template>
  <div id="app">
    <HelloWorld msg="@vue/cli" @patch="fun" />
    <hr>
    <hr>
    <Vuexx></Vuexx>
    <hr>
    <br>
    <br>
    <router-link to="/pagea">Go to pagea</router-link>
    <br>
    <router-link to="/pageb">Go to pageb</router-link>
    <br>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vuexx from './components/vuex.vue'
import './components/custom.js'  // 引入自定义指令文件

export default {
  name: 'app',
  components: {
    HelloWorld,
    Vuexx
  },
  methods: {
    fun ($event) {
      console.log('子组件点击了按钮')
      console.log($event)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
