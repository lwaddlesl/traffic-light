import { createWebHistory, createRouter } from "vue-router";
import TrafficLight from "../components/TrafficLight.vue";

const routes = [
    {
        path: '/',
        redirect: '/red'
    },
    {
        path: "/red",
        component: TrafficLight
    },
    {
        path: "/yellow",
        component: TrafficLight
    },
    {
        path: "/green",
        component: TrafficLight
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;