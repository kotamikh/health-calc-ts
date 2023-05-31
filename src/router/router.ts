import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import HomePoster from "@/components/HomePoster.vue";
import AboutService from "@/components/AboutService.vue";
import TheCalculator from "@/components/TheCalculator.vue";

const routes: Array<RouteRecordRaw> = [
        {
            path: '/',
            component: MainLayout,
            redirect: {
                name: 'Home'
            },
            children: [
                {
                    name: 'HomePoster',
                    path: '/home',
                    component: HomePoster
                },
                {
                    name: 'TheCalculator',
                    path: '/calculator',
                    component: TheCalculator
                },
                {
                    name: 'AboutService',
                    path: '/about',
                    component: AboutService
                }
            ]
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router