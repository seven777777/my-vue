<template>
  <div class="hello">
    <p>{{msg}}</p>
    <h1>{{ hmsg }}</h1>
    <h1>{{ hmsg }}</h1>
    <input type="text" value="要发送的数据" v-model="sendMsg">
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hmsg: 'Welcome to Your Vue.js App',
      sendMsg:'要发送的数据,啦啦啦'
    }
  },
  props:{
    msg:String,
    eventHub: Object
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      console.log(this.msg,1);
      this.$emit("test","first")
    },
    send(){
      this.eventHub.$emit('a-msg',this.sendMsg)
      // this.$router.push({path:'/seven'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
