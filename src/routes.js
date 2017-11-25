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
      {path: '/home/gallery', component: Menu},
      {path: '/home/agencies', component: Agencies},
      {path: '/home/contact', component: Contact},
      {path: '/home/web', component: Web},
      {path: '/home/gallery/photo', component: Menu},
      {path: '/home/gallery/video', component: Video},
      {path: '/home/gallery/photo/book', component: Book},
      {path: '/home/gallery/photo/composite', component: Composite},
      {path: '/home/gallery/photo/snapshots', component: Snapshots},

      {path: '/agencies', redirect: '/home/agencies'},
      {path: '/gallery', redirect: '/home/gallery'},
      {path: '/contact', redirect: '/home/contact'},
      {path: '/web', redirect: '/home/web'},
      {path: '/photo', redirect: '/home/gallery/photo'},
      {path: '/video', redirect: '/home/gallery/video'},
      {path: '/book', redirect: '/home/gallery/photo/book'},
      {path: '/composite', redirect: '/home/gallery/photo/composite'},
      {path: '/snapshots', redirect: '/home/gallery/photo/snapshots'},

      {path: '*', redirect: '/home'}

];