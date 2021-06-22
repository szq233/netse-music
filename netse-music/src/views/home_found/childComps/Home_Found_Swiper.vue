<template>
  <swiper>
    <swiper-item :key="index" v-for="(img,index) in banners">
      <a href="#">
        <img :src="img" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: "HomeFoundSwiper",
  data() {
    return {
      isLoad: false,
      banners: [
        "http://p1.music.126.net/YLmrS17ao5qttOjjz9-7mw==/109951166107344618.jpg",
        "http://p1.music.126.net/Xb3VOr3DSFHvPNYGkffa2g==/109951166107428826.jpg",
        "http://p1.music.126.net/XUnQhWrzE77GKoA91b9Brw==/109951166107454139.jpg",
        "http://p1.music.126.net/iem-q_JbuEXNDJw-lBjv5Q==/109951166106337999.jpg",
        "http://p1.music.126.net/3-8Xt23OhsW5_vr2F89bag==/109951166107483717.jpg",
        "http://p1.music.126.net/521rMejwQpk47S343Gbq9g==/109951166107529857.jpg",
        "http://p1.music.126.net/3k62jqOyAAOWXdemvluSxA==/109951166106562016.jpg",
      ]
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>

</style>