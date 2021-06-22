<template>
  <div id="music-main" :style="{visibility: $store.getters.musicMainIsShow ? 'visible' : 'hidden'}">
    <top-control></top-control>
    <music-container></music-container>
    <music-control-bar></music-control-bar>
  </div>
</template>

<script>
import TopControl from './childComps/TopControl.vue'
import MusicContainer from './childComps/MusicContainer.vue'
import MusicControlBar from 'components/common/musicControlBar/MusicControlBar'

export default {
  name: "MusicMain",
  components: {
    TopControl,
    MusicContainer,
    MusicControlBar
  }
}
</script>

<style scoped>
  #music-main {
    z-index: 10;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(32, 32, 32);
    /* transform: translateY(10vh); */
    /* music主界面默认隐藏 */
  }
</style>