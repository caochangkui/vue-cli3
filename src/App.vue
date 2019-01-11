<template>
  <div id="app">
    <!-- <HelloWorld msg="@vue/cli" @patch="fun" />
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
    <hr> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
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
