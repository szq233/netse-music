<template>
  <div id="app">
    <music-main></music-main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <music-mini-bar></music-mini-bar>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import MusicMiniBar from 'components/content/musicMiniBar/MusicMiniBar'
import MusicMain from 'views/music_main/MusicMain'

export default {
  name: "App",
  components: {
    MainTabBar,
    MusicMiniBar,
    MusicMain
  }
}
</script>


<style>
  @import "./assets/css/base.css";
</style>
