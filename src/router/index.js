import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/view/Home')
const Login = () => import('@/view/login')
const Learn1 = () => import('@/view/Learn1')
const Learn2 = () => import('@/view/Learn2')
const Learn3 = () => import('@/view/Learn3')
const Learn4 = () => import('@/view/Learn4')
const Learn5 = () => import('@/view/Learn5')
const Learn6 = () => import('@/view/Learn6')

const About = () => import('@/view/About')

const routes = [
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Learn1",
        name: "Learn1",
        component: Learn1,
    },
    {
        path: "/Learn2",
        name: "Learn2",
        component: Learn2,
    },
    {
        path: "/Learn3",
        name: "Learn3",
        component: Learn3,
    },
    {
        path: "/Learn4",
        name: "Learn4",
        component: Learn4,
    },
    {
        path: "/Learn5",
        name: "Learn5",
        component: Learn5,
    },
    {
        path: "/Learn6",
        name: "Learn6",
        component: Learn6,
    },
    // {
    //     path: "/Learn7",
    //     name: "Learn7",
    //     component: Learn7,
    // },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/About",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,from,next )=>{
    console.log(to);
    console.log(from);
    let token=localStorage.getItem("token");
    if(token|| to.path==="/login"){
        next();
    }else {
        next("/login");
    }
})

export default router;
