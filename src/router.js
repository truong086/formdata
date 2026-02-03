import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HelloWorld.vue";
import LoginPage from "./components/LoginPage.vue";
import { useCounterStore } from "./store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase/config";
// import { path } from "ramda";
// import { compose } from "ramda";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
        // meta: {
        //     css: [
        //         "/AuthStyle/css/style.css"
        //     ],
        //     js: [
        //         "/AuthStyle/vendor/jquery/jquery.min.js",
        //         "/AuthStyle/js/main.js"
        //     ],
        // },
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
        // meta: {
        //     css: [
        //         "/AuthStyle/css/style.css"
        //     ],
        //     js: [
        //         "/AuthStyle/vendor/jquery/jquery.min.js",
        //         "/AuthStyle/js/main.js"
        //     ],
        // },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function loadBootstrap(to) {
    // Load CSS
    const cssFiles = to.meta.css || [];
    cssFiles.forEach((css) => {
        if (!document.querySelector(`link[href="${css}"]`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = css;
            document.head.appendChild(link);
        }
    });

    // Load JS
    const jsFiles = to.meta.js || [];
    jsFiles.forEach((js) => {
        if (!document.querySelector(`script[src="${js}"]`)) {
            const script = document.createElement("script");
            script.src = js;
            script.async = false;
            document.body.appendChild(script);
        }
    });
}

router.afterEach((to) => {
    loadBootstrap(to);
});

router.beforeEach((to, from, next) => {
    loadBootstrap(to);
    const counter = useCounterStore();
    const paths = ["/login"];

    const checkPaths = !paths.includes(to.path);

    const auths = to.meta.requiresAuth;
    const roles = to.meta.roleAdmin;
    const token = counter.getToken;
    const role = counter.getRole(0) || -1;
    // next("/login");
    onAuthStateChanged(auth, (user) => { // Lấy ra user Login
        if (!user) {
            next("/login");
        } 
    })
    if (checkPaths && token && (!roles || roles.includes(role))) {
        next();
    }
    if (auths && !token) {
        // next("/login");
        next("/login");
    } else if (auths && token) {
        if (!roles || roles.includes(role)) {
            next();
        } else {
            // next("/login");
            next("/login");
        }
    } else {
        next();
    }
    if (paths) {
        // next("/login");
        next("/login");
    } else {
        next();
    }
});

export default router;
