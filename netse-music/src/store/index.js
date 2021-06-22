import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicplaying: true,
    musicMainShow: true
  },
  mutations: {
    playmusic() {
      state.musicplaying = true;
    },
    stopmusic() {
      state.musicplaying = false;
    },
    showMusicMain(state) {
      state.musicMainShow = true;
    },
    hidMusicMain(state) {
      state.musicMainShow = false;
    }
  },
  getters: {
    getflag(state) {
      return state.musicplaying
    },
    musicMainIsShow(state) {
      return state.musicMainShow
    }
  },
  actions: {
  },
  modules: {
  }
})
