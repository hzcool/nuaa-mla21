import { createRouter, createWebHashHistory } from "vue-router"

import Index from '../pages/Index.vue'
import Home from '../pages/Home.vue'
import Organization from '../pages/Organization.vue'
import Experts from '../pages/Experts.vue'
import Program from '../pages/Program.vue'
import Poster from '../pages/Poster.vue'
import Accom from "../pages/Accom.vue";
import Sponsor from "../pages/Sponsor.vue";
import Map from "../pages/Map.vue";
import Book from "../pages/Book.vue";
// import Past from "../pages/Past.vue";


const routes = [
    {
        path: "/",
        redirect: '/home',
        name: "index",
        // component: () => import("../pages/Index.vue"),
        component: Index,
        children: [
            {
                path: "/home",
                name: "home",
                // component: () => import("../pages/Home.vue")
                component: Home,
            },
            {
                path: "/organization",
                name: "organization",
                // component: () => import("../pages/Organization.vue")
                component: Organization,
            },
            {
                path: "/experts",
                name: "experts",
                // component: () => import("../pages/Experts.vue")
                component: Experts,
            },
            {
                path: "/program",
                name: "program",
                // component: () => import("../pages/Program.vue")

                component: Program,
            },
            {
                path: "/poster",
                name: "poster",
                // component: () => import("../pages/ProgramPoster.vue")
                component: Poster,
            },
            {
                path: "/accom",
                name: "accom",
                // component: () => import("../pages/Accom.vue")
                component: Accom,
            },
            {
                path: "/sponsor",
                name: "sponsor",
                // component: () => import("../pages/Sponsor.vue")
                component: Sponsor,
            },
            {
                path: "/map",
                name: "map",
                // component: () => import("../pages/Map.vue")
                component: Map,
            },
            {
                path: "/book",
                name: "book",
                // component: () => import("../pages/Book.vue")
                component: Book,
            },
            // {
            //     path: "/past",
            //     name: "past",
            //     // component: () => import("../pages/Past.vue")
            //     component: Past
            // },
        ]
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})