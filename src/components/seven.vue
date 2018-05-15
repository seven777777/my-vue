<template>
  <div class="seven">
    {{msg2}}
    <div class="box"></div>
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
  width: 1000px;
  height: 500px;
  background: pink;
  .box{
    width: 100px;
    height: 100px;
    background:#fff;
    margin:0 auto;
  }
}
</style>
