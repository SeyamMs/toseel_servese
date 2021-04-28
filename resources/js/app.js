import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
import VueSmoothScroll from 'vue3-smooth-scroll'

const el = document.getElementById('app')

createApp({
    render: () => h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    })
}).use(plugin).use(VueSmoothScroll).mixin({ methods: { route } }).mount(el)
