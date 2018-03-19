// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAPDjdCoapw2aKVqMRpEv2hdoEyQGi-Rqo",
  authDomain: "todo-41230.firebaseapp.com",
  databaseURL: "https://todo-41230.firebaseio.com",
  projectId: "todo-41230",
  storageBucket: "todo-41230.appspot.com",
  messagingSenderId: "95131529295"
};
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
