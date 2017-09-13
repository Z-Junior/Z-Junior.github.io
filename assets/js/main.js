const router = new VueRouter({
  routes: [
      {
          path: '/projects',
          component: {
              template: '/assets/templates/Projects.Vue'
          }
      }
  ]
});

const app = new Vue({
  router
}).$mount('#app')
