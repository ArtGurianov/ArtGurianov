export const Categories = {
        admin: {
            id: 'admin',
            title: 'Admin Panel',
            component: 'Admin'
          },
        home: {
            id: 'home',
            title: 'Home',
            component: 'Menu',
            elements: ['gallery', 'agencies', 'contact', 'web']
        },
        contact: {
            id: 'contact-select',
            title: 'Contact',
            component: 'Contact'
        },
        web: {
            id: 'web-select',
            title: 'Web',
            component: 'Web'
        },
        photo: {
            id: 'photo-select',
            title: 'Photo',
            component: 'Menu',
            elements: ['book', 'composite', 'snapshots']
        },

        book: {
            id: 'book-select',
            title: 'Book',
            component: 'Book'
        },
        gallery: {
            id: 'gallery-select',
            title: 'Gallery',
            component: 'Menu',
            elements: ['photo', 'video']
        },

        composite: {
            id: 'composite-select',
            title: 'Comcard',
            component: 'Composite'
        },
        snapshots: {
            id: 'snapshots-select',
            title: 'Snapshots',
            component: 'Snapshots'
        },
        video: {
            id: 'video-select',
            title: 'Video',
            component: 'Video'
        },
        agencies: {
            id: 'agencies-select',
            title: 'Agencies',
            component: 'Agencies'
        }

}