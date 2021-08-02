import { createWebHistory, createRouter } from "vue-router";
import PostList from '../components/PostList.vue';
import PostDetail from '../components/PostDetail.vue';

const routes = [
    {
        path : "/list",
        component : PostList,
    },
    {
        path : "/detail/:id",
        component : PostDetail,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;