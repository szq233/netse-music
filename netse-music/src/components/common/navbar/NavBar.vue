<template>
  <!-- 头部导航控制栏 -->
  <div id="nav-bar">
    <div class="left"><img src="~assets/img/navbar/aside.svg" alt=""></div>
    <div class="center"><slot name="center">中</slot></div>
    <div class="right"><slot name="right">右</slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"

}
</script>

<style scoped>
  #nav-bar {
    display: flex;
    width: 100vw;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    background-image: linear-gradient(to bottom,#e4ecee, #ebf0f3);
  }
  #nav-bar img {
    width: 30px;
    height: 30px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .left,.right {
    width: 50px;
  }
  .center {
    flex: 1;
  }
</style>