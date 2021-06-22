import Vue from 'vue'
import VueRouter from 'vue-router'

const Home_Found = ()=> import('views/home_found/Home_Found')
const Home_Video = ()=> import('views/home_video/Home_Video')
const Home_Profile = ()=> import('views/home_profile/Home_Profile')
const Home_Society = ()=> import('views/home_society/Home_Society')

const DigiAlbum = () => import('components/content/latestContainer/DigiAlbum')
const NewSongs = () => import('components/content/latestContainer/NewSongs')
const NewCD = () => import('components/content/latestContainer/NewCD')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/homefound'
  },
  {
    path: '/homefound',
    component: Home_Found,
    children: [
      {
        path: '',
        component: NewSongs
      },
      {
        path: 'newcd',
        component: NewCD
      },
      {
        path: 'digialbum',
        component: DigiAlbum
      }
    ]
  },
  {
    path: '/homevideo',
    component: Home_Video
  },
  {
    path: '/homeprofile',
    component: Home_Profile
  },
  {
    path: '/homesociety',
    component: Home_Society
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
