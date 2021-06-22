<template>
  <div id="mini-bar" >
    <div class="music-detail" @click="showMusicMain">
      <div :class="{cdimg: true, cdscroll: $store.getters.getflag}">
        <img src="~assets/img/controlbar/黑胶唱片.png" alt="">
      </div>
      <span>歌名</span>
    </div>
    <div class="control-btn">
      <img v-if="!$store.getters.getflag" src="~assets/img/controlbar/play.svg" alt="">
      <img v-else src="~assets/img/controlbar/stop.svg" alt="">
      <img src="~assets/img/controlbar/playlist.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicMiniBar",
  data() {
    return {
      
    }
  },
  methods: {
    showMusicMain() {
      this.$store.commit('showMusicMain')
    }
  }
}
</script>

<style scoped>
  @keyframes scroll {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  #mini-bar {
    height: 50px;
    width: 100vw;
    position: fixed;
    bottom: 55px;
    background-color: #fff;
    vertical-align: middle;
  }
  .music-detail {
    width: 70vw;
  }
  .music-detail,.control-btn {
    display: inline-block;
  }
  .cdimg {
    position: absolute;
    left: 3%;
    bottom: 8%;
    background-image: url("~assets/img/testimg/cdimgtest.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 71%;
    border-radius: 50%;
    background-clip: content-box;
  }
  .cdscroll {
    animation: scroll 7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .cdimg,.cdimg img {
    width: 60px;
    height: 60px;
  }
  .cdimg+span {
    margin-left: 35%;
    line-height: 50px;
  }
  .control-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 50px;
    height: 50px;
    width: 30vw;
  }
  .control-btn img{
    position: absolute;
    right: 14%;
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }
  .control-btn img:first-child{
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 20px;
    right: 40%;
  }
</style>