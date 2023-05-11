import posts from "@/components/posts";
import loading from "@/components/loading";
import TheLogin from "@/components/TheLogin";
import MainPosts from "@/components/MainPost";
import TheRegistration from "@/components/TheRegistration";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/posts',
        component: posts
    },
    {
        path: '/load',
        component: loading
    },
    {
        path: '/login',
        component: TheLogin
    },
    {
        path: '/signup',
        component: TheRegistration
    },
    {
        path: '/main',
        component: MainPosts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;