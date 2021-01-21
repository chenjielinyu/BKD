import Vue from "vue";

import VueRouter from "vue-router";


import Home from "../view/Home.vue";
import User from "../view/User.vue";
import Goods from "../view/Goods.vue";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import NotFound from "../view/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/home',
            name: "home",
            component: Home
        }, {
            path: '/',
            redirect: "/home"
        }, {
            path: '/user',
            name: "user",
            component: User
        }, {
            path: '/goods',
            name: "goods",
            component: Goods
        }, {
            path: '/login',
            name: "login",
            component: Login
        }, {
            path: '/register',
            name: "register",
            component: Register
        },
        //404 not found
        {
            path: "/*",
            name: "notFound",
            component: NotFound
        },
    ]
});

export default router;
``