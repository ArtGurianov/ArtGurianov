export const Categories = {
        auth: {
            id: 'auth',
            title: 'Login',
            component: 'Auth'
        },
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
            component: 'Agencies',
            content: {
                'Russia': {
                    id: 'russia-select',
                    title: 'Russia',
                    agency: 'LookModels',
                    booker: 'Veronika',
                    email: 'email@gmail.com',
                    hidden: true
                },
                'France': {
                    id: 'france-select',
                    title: 'France',
                    agency: 'MP',
                    booker: 'Colette',
                    email: 'email@gmail.com',
                    hidden: true
                },
                'Italy': {
                    id: 'italy-select',
                    title: 'Italy',
                    agency: 'Major',
                    booker: 'Christiano',
                    email: 'email@gmail.com',
                    hidden: true
                },
                'Japan': {
                    id: 'japan-select',
                    title: 'Japan',
                    agency: 'Exiles',
                    booker: 'Mayumi',
                    email: 'email@gmail.com',
                    hidden: true
                },
                'Korea': {
                    id: 'korea-select',
                    title: 'Korea',
                    agency: 'MDI',
                    booker: 'Rachel',
                    email: 'email@gmail.com',
                    hidden: true
                },
                "Others": {
                    id: 'others-select',
                    title: 'Others',
                    hidden: true
                }
            }
        }
}