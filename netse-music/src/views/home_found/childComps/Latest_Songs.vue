<template>
  <div class="container">
    <div class="nav">
      <span v-for="(item,index) in navList" 
      :key="index" 
      :class="{navActive: $route.path == item.path}"
      @click="navClick(index)">{{item.title}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LatestSongs",
  data(){
    return{
      navList:[
        {
          title: '新歌',
          path: '/homefound'
        },
        {
          title: '新碟',
          path: '/homefound/newcd'
        },
        {
          title: '数字专辑',
          path: '/homefound/digialbum'
        }
      ]
    }
  },
  methods: {
    navClick(index) {
      this.$router.replace(this.navList[index].path).catch(err => {err})
    }
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 30vh;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.nav {
  font-size: 18px;
  color: #c1c1c1;
  padding: 15px 0;
}
.nav span {
  /* padding: 15px; */
  padding: 0 15px;
  border-right: 1px solid #e6e6e6;
}
.nav .navActive {
  color: #646464;
}
.nav span:last-child {
  border: none;
}
</style>