import { createWebHistory, createRouter } from "vue-router";
import Order from "./views/Order.vue";
import Item from "./views/Item.vue";

const routes = [
  {
    path: "/item/:id",
    name: "Item",
    component: Item,
  },
  {
    path: "/",
    name: "Order",
    component: Order,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
