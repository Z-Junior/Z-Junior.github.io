const router = new VueRouter({
  routes: [
      {
          path: '/about',
          component: {
              template: '/assets/templates/About.Vue'
          }
      }
  ]
});

const app = new Vue({
  router
}).$mount('#app')
