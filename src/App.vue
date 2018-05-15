<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <seven/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import seven from './components/seven'

export default {
  name: 'App',
  components: {
    HelloWorld,
    seven
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
