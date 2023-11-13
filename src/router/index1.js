import {createRouter, createWebHistory} from "vue-router";

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },

        {
            path: '/login',
            name: 'login',
            component: () => import("../components/views/login.vue"),
        },
        {
            path: '/resgister',
            name: 'resgister',
            component: () => import("../components/views/resgister.vue"),
        },
        {
            path: '/findpd',
            name: 'findpd',
            component: () => import("../components/views/findpd.vue"),
        },

    ]
})
export default routers