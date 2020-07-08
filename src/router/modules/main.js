export default {
    path: '/',
    name: 'MainBase',
    hidden: true,
    meta: {
        title: "BaseVue"
    },
    component:  () => import("@/layout/BaseLayout"),
    redirect: { name: 'Home' },
    children: [
        {
            path: 'index',
            name: 'Home',
            meta: {
                title: 'BaseVue',
            },
            component: () => import('@/views/Home'),
        },
    ]
}
