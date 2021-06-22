<template>
  <div class="h-swiper">
    <ul class="app-list" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <li v-for="(item, index) in smallapplist" :key="index">
        <div class="bgc">
          <img :src="item.icon" alt="">
        </div>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {miniappicons} from 'assets/img/miniapp/out.js'


export default {
  name: "MiniAppGroup",
  data() {
    return {
      lastmovedistance: 0,
      swiperStyle:{},
      smallapplist: [
        {
          title: '每日推荐',
          icon: miniappicons[0],
          path: ''
        },
        {
          title: '私人FM',
          icon: miniappicons[1],
          path: ''
        },
        {
          title: '歌单',
          icon: miniappicons[2],
          path: ''
        },
        {
          title: '排行榜',
          icon: miniappicons[3],
          path: ''
        },
        {
          title: '数字专辑',
          icon: miniappicons[4],
          path: ''
        },
        {
          title: '专注冥想',
          icon: miniappicons[5],
          path: ''
        },
        {
          title: '歌房',
          icon: miniappicons[6],
          path: ''
        },
        {
          title: '游戏专区',
          icon: miniappicons[7],
          path: ''
        }
      ]
    }
  },
  methods: {
    touchStart(e) {
      // console.log( 'start',e)
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      // console.log('move',e)
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let moveDistance = this.distance;
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      // 取绝对值以获得移动的距离
      // let currentMove = Math.abs(this.distance);
      // let swiperEl = document.getElementsByClassName("app-list")[0];
      // console.log(swiperEl.style.transform)

      // 保存已经发生的偏移量，以便在下一次设置偏移量的时候累加上以及发生的偏移量
      this.lastmovedistance = this.lastmovedistance + this.distance;
      // if(currentMove > window.innerWidth * 0.5) {
      //   this.scrollToSide()
      // }
    },
    setTransform(d) {
      this.swiperStyle.transform = `translate3d(${this.lastmovedistance + d}px, 0, 0)`;
      
    },
    // scrollToSide() {
    //   // this.swiperStyle.transition = 'transform '+ this.animDuration + 'ms';
    //   // this.swiperStyle.transform = `translate3d(50px, 0, 0)`;
    // }
  },
  mounted() {
    let swiperEl = document.getElementsByClassName("app-list")[0];
    this.swiperStyle = swiperEl.style;
  }
}
</script>

<style scoped>
  .h-swiper {
    position: relative;
    overflow: hidden;
    background-color: #fff;
    padding: 12px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .app-list {
    display: flex;
    /* overflow: hidden; */
    width: 100%;
  }
  .app-list li {
    list-style: none;
    text-align: center;
    font-size: 12px;
  }
  .bgc {
    width: 50px;
    height: 50px;
    background-color: var(--color-icon-bg);
    border-radius: 50%;
    margin: 0px 10px;
  }
  .app-list li img {
    width: 30px;
    margin-top: 10px;
    /* border-radius: 15px; */
    
  }
</style>
