import Menu from './components/pages/Menu.vue';
import Agencies from './components/pages/home/Agencies.vue';
import Contact from './components/pages/home/Contact.vue';
import Web from './components/pages/home/Web.vue';
import Video from './components/pages/home/gallery/Video.vue';
import Book from './components/pages/home/gallery/photo/Book.vue';
import Composite from './components/pages/home/gallery/photo/Composite.vue';
import Snapshots from './components/pages/home/gallery/photo/Snapshots.vue';


export const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Menu},
    {path: '/agencies', component: Agencies},
    {path: '/gallery', component: Menu},
    {path: '/contact', component: Contact},
    {path: '/web', component: Web},
    {path: '/photo', component: Menu},
    {path: '/video', component: Video},
    {path: '/book', component: Book},
    {path: '/composite', component: Composite},
    {path: '/snapshots', component: Snapshots}

];