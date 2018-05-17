<template>
  <div class="seven">
    <h1>{{ msg2 }}</h1>
    <div class="box_wrap">
      <p class="box">1</p>
      <p class="box">2</p>
      <p class="box">3</p>
      <p class="box">4</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seven',
  data () {
    return {
      msg2: '这是一个测试'
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
