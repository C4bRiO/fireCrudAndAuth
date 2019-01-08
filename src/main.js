// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';
import 'vuetify/dist/vuetify.min.css';
Vue.config.productionTip = false;

Vue.use(Vuetify);


let app;

firebase.auth().onAuthStateChanged(user => {
  if(!app)
  {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
});

