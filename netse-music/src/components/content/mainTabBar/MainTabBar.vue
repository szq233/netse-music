<template>
  <tab-bar>
    <tab-bar-item path="/homefound">
      <img slot="item-icon" src="~assets/img/tabbar/home_found.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_found_active.svg" alt="">
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/homevideo">
      <img slot="item-icon" src="~assets/img/tabbar/home_video.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_video_active.svg" alt="">
      <div slot="item-text">播客</div>
    </tab-bar-item>
    <tab-bar-item path="/homeprofile">
      <img slot="item-icon" src="~assets/img/tabbar/home_profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <tab-bar-item path="/homesociety">
      <img slot="item-icon" src="~assets/img/tabbar/home_society.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_society_active.svg" alt="">
      <div slot="item-text">云寨</div>
    </tab-bar-item>
  </tab-bar> 
</template>

<script>
  import TabBar from 'common/tabbar/TabBar'
  import TabBarItem from 'common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>