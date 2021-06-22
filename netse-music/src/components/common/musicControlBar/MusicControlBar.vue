<template>
  <div id="music-control-bar">
    <div class="m-progress">
      <span>00:00</span>
      <progress value="10" max="40"></progress>
      <span>00:00</span>
    </div>
    <slot></slot>
    <div class="main-btn">
      <img src="./btnImg/singleloop.svg" alt="">
      <img src="./btnImg/prev.svg" alt="">
      <img src="./btnImg/play.svg" alt="">
      <img src="./btnImg/next.svg" alt="">
      <img src="./btnImg/list.svg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: "MusicControlBar",
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
  #music-control-bar {
    width: 100vw;
    position: absolute;
    display: flex;
    bottom: 14%;
    /* text-align: center; */
  }
  .main-btn {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    top: 40px;
    left: 5%;
  }
  .m-progress {
    width: 90vw;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 5%;
    vertical-align: middle;
    /* border-radius: 20px; */
  }
  .m-progress progress {
    width: 70%;
    height: 6px;
  }
  .main-btn img{
    margin: 0 10px;
    width: 30px;
    height: 30px;
  }
  .main-btn img:nth-child(3) {
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
  }
</style>
