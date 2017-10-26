export const Categories = {
        auth: {
            id: 'auth',
            title: 'Login',
            defaultChainEl: ['auth'],
            component: 'Auth'
        },
        admin: {
            id: 'admin',
            title: 'Admin Panel',
            defaultChainEl: ['admin'],
            component: 'Admin'
          },
        home: {
            id: 'home',
            title: 'Home',
            defaultChainEl: ['home'],
            component: 'Menu',
            elements: ['gallery', 'agencies', 'contact', 'web']
        },
        contact: {
            id: 'contact-select',
            title: 'Contact',
            defaultChainEl: ['home', 'gallery'],
            component: 'Contact'
        },
        web: {
            id: 'web-select',
            title: 'Web',
            defaultChainEl: ['home', 'web'],
            component: 'Web'
        },
        photo: {
            id: 'photo-select',
            title: 'Photo',
            defaultChainEl: ['home', 'gallery', 'photo'],
            component: 'Menu',
            elements: ['book', 'composite', 'snapshots']
        },

        book: {
            id: 'book-select',
            title: 'Book',
            defaultChainEl: ['home', 'gallery', 'photo', 'book'],
          component: 'Book'
        },
        gallery: {
            id: 'gallery-select',
            title: 'Gallery',
            defaultChainEl: ['home', 'gallery'],
            component: 'Menu',
            elements: ['photo', 'video']
        },

        composite: {
            id: 'composite-select',
            title: 'Comcard',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite'],
            component: 'Composite'
        },
        /*customCard: {
            id: 'custom-composite-select',
            title: 'Make a custom comcard',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite', 'customComposite']
        },
        defaultCard: {
            id: 'default-composite-select',
            title: 'Download default version',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite', 'defaultComposite']
        },*/
        snapshots: {
            id: 'snapshots-select',
            title: 'Snapshots',
            defaultChainEl: ['home', 'gallery', 'photo', 'snapshots'],
            component: 'Snapshots'
        },
        video: {
            id: 'video-select',
            title: 'Video',
            defaultChainEl: ['home', 'gallery', 'video'],
            component: 'Video'
        },
        agencies: {
            id: 'agencies-select',
            title: 'Agencies',
            defaultChainEl: ['home', 'agencies'],
            component: 'Agencies',
            content: {
                'Russia': {
                    id: 'russia-select',
                    title: 'Russia',
                    agency: 'LookModels',
                    booker: 'Veronika',
                    email: 'email@gmail.com',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                },
                'France': {
                    id: 'france-select',
                    title: 'France',
                    agency: 'MP',
                    booker: 'Colette',
                    email: 'email@gmail.com',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                },
                'Italy': {
                    id: 'italy-select',
                    title: 'Italy',
                    agency: 'Major',
                    booker: 'Christiano',
                    email: 'email@gmail.com',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                },
                'Japan': {
                    id: 'japan-select',
                    title: 'Japan',
                    agency: 'Exiles',
                    booker: 'Mayumi',
                    email: 'email@gmail.com',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                },
                'Korea': {
                    id: 'korea-select',
                    title: 'Korea',
                    agency: 'MDI',
                    booker: 'Rachel',
                    email: 'email@gmail.com',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                },
                "Others": {
                    id: 'others-select',
                    title: 'Others',
                    defaultChainEl: ['/gallery'],
                    hidden: true
                }
            }
        }
}