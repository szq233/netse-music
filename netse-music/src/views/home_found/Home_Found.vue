<template>
  <div id="home-found">
    <nav-bar class="home-found-nav">
      <div slot="center">搜索框</div>
      <img slot="right" src="~assets/img/navbar/record.svg" alt="">
    </nav-bar>
    <div class="content">
      <!-- <h2>发现页</h2> -->
      <!-- <home-found-swiper @swiperImageLoad="swiperImageLoad"></home-found-swiper> -->
      <home-found-swiper></home-found-swiper>
      <mini-app-group></mini-app-group>
      <latest-songs></latest-songs>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeFoundSwiper from './childComps/Home_Found_Swiper.vue'
import MiniAppGroup from './childComps/Mini_App_Group.vue'
import LatestSongs from './childComps/Latest_Songs.vue'

export default {
  name: 'HomeFound',
  data() {
    return {
      beforePath: '/homefound'
    }
  },
  components: {
    NavBar,
    HomeFoundSwiper,
    MiniAppGroup,
    LatestSongs
  },
  methods: {
    // swiperImageLoad() {
    //   this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    // },
  },
  activated() {
    this.$router.replace(this.beforePath).catch(err => {err})
  },
  beforeRouteLeave(to, from, next) {
      // this.path = this.$route.path
    this.beforePath = from.path
    next()
  }

}
</script>

<style scoped>
  #home-found {
    position: relative;
    height: 100vh;
  }
  .content {
    position: absolute;
    width: 100vw;
    overflow: hidden;
    height: calc(100%-49px);
    top: 44px;
  }
</style>