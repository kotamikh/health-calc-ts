import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import HomePoster from "@/components/HomePoster.vue";
import Calculator from "@/components/TheCalculator.vue";
import About from "@/components/AboutService.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
            redirect: {name: 'Home'},
            children: [
                {
                    name: 'HomePoster',
                    path: '/home',
                    component: HomePoster
                },
                {
                    name: 'Calculator',
                    path: '/calculator',
                    component: Calculator
                },
                {
                    name: 'About',
                    path: '/about',
                    component: About
                }
            ]
        }
    ]
})
