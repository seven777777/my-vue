<template>
  <div class="seven">
    <p>{{msg}}</p>
    <h1>{{ msg2 }}</h1>
    <div class="box_wrap">
      <p class="box">1</p>
      <p class="box">2</p>
      <p class="box">3</p>
      <p class="box">4</p>
    </div>
    <p>传来的数据是：{{acceptMsg}}</p>
  </div>
</template>

<script>
export default {
  name: 'seven',
  data () {
    return {
      msg2: '这是一个测试',
      acceptMsg:''
    }
  },
  props:{
    msg:String,
    eventHub: Object
  },
   mounted(){
     let _this = this;
    this.init();
    console.log(this.acceptMsg)
    this.eventHub.$on('a-msg',(msg)=>{
      _this.acceptMsg=msg;
    })
    console.log(this.acceptMsg)
    
  },
  methods:{
    init(){
      console.log(this.msg,2);
      this.$emit("test","second")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.seven{
  width: 100%;
  height: 500px;
  .box_wrap{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    .box{
      width: 100px;
      height: 100px;
      margin: 10px 20px;
      background:rgb(19, 151, 70);
    }
  }
}
</style>
