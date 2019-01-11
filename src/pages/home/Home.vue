<template>
  <div class="home">
    <HelloWorld msg="@vue/cli" @patch="fun"/>
    <hr>
    <hr>
    <Vuexx></Vuexx>
    <hr>
    <br>
    <br>
    <router-link to="/home">Go to home page</router-link>
    <br>
    <br>
    <router-link to="/city">Go to city page</router-link>
    <br>
    <br>
    <router-link to="/home/pagea">Go to pagea</router-link>
    <br>
    <router-link to="/home/pageb">Go to pageb</router-link>
    <br>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Vuexx from "./components/vuex.vue";
import "./components/custom.js"; // 引入自定义指令文件

export default {
  name: "Home",
  components: {
    HelloWorld,
    Vuexx
  },
  data() {
    return {};
  },
  methods: {
    /* eslint-disable */
    fun ($event) {
        console.log('子组件点击了按钮')
        console.log($event)
    }
  },
  /*
    activated() {
        // 当路由发送变化时（即进入home.vue组件时），就会执行钩子函数 activaed
        if (this.lastCity !== this.city) {
        // 每次进入home组件，检查当前城市city是否变化，若变化，则执行axios请求
        this.lastCity = this.city;
        this.getHomeInfo();
        }
        console.log("activated");
    },
    deactivated() {
        // 当路由发送变化时（即离开home.vue组件时），就会执行钩子函数 deactivaed
        console.log("deactivated");
    }
    */

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
