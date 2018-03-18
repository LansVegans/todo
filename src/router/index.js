import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/user/SignIn'
import SignUp from '@/components/user/SignUp'
import Profile from '@/components/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/signin',
    	name: 'SignIn',
    	component: SignIn
    },
    {
    	path: '/signup',
    	name: 'SignUp',
    	component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode:'history'
})
