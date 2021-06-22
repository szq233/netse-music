<template>
  <div class="top-control">
      <img src="~assets/img/musicmain/top/down.svg" alt="" @click="hiddenMain">
      <div class="song-detail">
        <div>歌名</div>
        <div class="author">歌手</div>
      </div>
      <img src="~assets/img/musicmain/top/share.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "TopControl",
  methods: {
    hiddenMain() {
      this.$store.commit('hidMusicMain')
    }
  }
}
</script>

<style scoped>
  .top-control {
    display: flex;
    justify-content: space-between;
  }
  .top-control img {
    height: 30px;
    width: 30px;
    margin: 10px;
  }
  .top-control img:first-child {
    transform: rotate(90deg);
  }
  .song-detail {
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 36px;
  }
  .song-detail .author {
    color: var(--color-text);
    font-size: 14px;
    line-height: 14px;
  }
</style>
