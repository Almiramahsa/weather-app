import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import City from "../views/City.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/weather/:state/city",
      name: "City",
      component: City,
      meta: {
        title: "Weather",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title
  } |The Open Weather `;
  next();
});
export default router;
