<template>
  <div class="container">
    <div v-if="musicOrLyr" class="cd-overall">
      <img :class="{cdOn: $store.getters.getflag}" src="~assets/img/musicmain/containerimg/CD头.png" alt="">
      <div :class="{cd:true, cdscroll: $store.getters.getflag}">
        <img src="~assets/img/controlbar/黑胶唱片.png" alt="">
      </div>
      <div class="container-btn">
        <img src="~assets/img/musicmain/containerbtn/heart.svg" alt="">
        <img src="~assets/img/musicmain/containerbtn/heart.svg" alt="">
        <img src="~assets/img/musicmain/containerbtn/heart.svg" alt="">
        <img src="~assets/img/musicmain/containerbtn/heart.svg" alt="">
        <img src="~assets/img/musicmain/containerbtn/heart.svg" alt="">
      </div>
    </div>
    <div v-else>
      歌词
    </div>
  </div>
</template>

<script>

export default {
  name: "MusicContainer",
  data() {
    return {
      musicOrLyr: 1
    }
  },
}
</script>

<style scoped>
  @keyframes scroll {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .cd-overall {
    text-align: center;
  }
  .cd-overall>img{
    z-index: 5;
    height: 33vw;
    transform: translateX(-6%);
    position: fixed;
  }
  .cdOn {
    /* 音乐播放中cd头位置  */
    transform: translate(-21%,16%) rotate(20deg) !important; 
  }
  .cd {
    position: fixed;
    top: 20vh;
    background-image: url('~assets/img/testimg/cdimgtest.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-clip: border-box;
    left: 10%;
  }
  .container-btn {
    display: flex;
    position: absolute;
    bottom: 16vh;
    justify-content: space-around;
    overflow: hidden;
    width: 100vw;
    /* height: 100px; */
  }
  .container-btn img {
    width: 30px;
    height: 30px;
  }
  .cdscroll {
    animation: scroll 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .cd img {
    width: 80vw;
    height: 80vw;
  }
</style>