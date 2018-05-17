<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul class="nav">
      <router-link tag="li" to="/">Jump to Home</router-link>
      <router-link tag="li" to="/seven">Go to seven</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav{
  width:100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  li{
    float: left;
    list-style: none;
    width:50%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: rgb(49, 40, 40);
    background: #eee;
  }
  .router-link-exact-active{
    background: #2c3e50;
    color: white;
  }
}
</style>
