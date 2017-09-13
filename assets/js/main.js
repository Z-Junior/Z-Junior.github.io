const router = new VueRouter({
  routes: [
      {
          path: '/class',
          component: {
              template: '/assets/templates/About.Vue'
          }
      }
  ]
});

const app = new Vue({
  router
}).$mount('#app')
