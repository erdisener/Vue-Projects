import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {   
        name: "HomePage",
        path: "/",
        component: () => import("@/views/Home")
    },
    {
        name: "AboutlPage",
        path: "/hakkimda",
        component: () => import("@/views/About")
    },
    
    {
        name: "DetailPage",
        path: "/detay/:userID",
        component: () => import("@/views/Details")
    }
];

const router = createRouter({
    routes,
   // history: createWebHistory()
    history: createWebHashHistory()
});

export default router;