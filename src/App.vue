<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{msg}}</p>
    <ul class="nav">
      <router-link tag="li" to="/">Jump to Home</router-link>
      <router-link tag="li" to="/seven">Go to seven</router-link>
    </ul>
    <router-view :msg="msg" :eventHub="eventHub" v-on:test="testP"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
let eventHub = new Vue();

export default {
  name: 'App',
  data(){
    return {
      msg:"这是父组件的数据",
      eventHub:eventHub
    }
  },
  methods:{
    testP(msg){
      console.log(msg,123);
      this.msg=msg;
    }
  }
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
