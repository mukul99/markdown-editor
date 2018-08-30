// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'

Vue.config.productionTip = false // Don't know yet

/* eslint-disable */
new Vue({
  el: '#app',
  components: { 
    App
  },
  template: '<h1>Markdown Editor</h1>'
})
