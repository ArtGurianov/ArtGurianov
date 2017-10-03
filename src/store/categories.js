export const Categories = {
        home: {
            id: 'home',
            title: 'Home',
            defaultChainEl: ['home']
        },
        contact: {
            id: 'contact-select',
            title: 'Contact',
            defaultChainEl: ['home', 'gallery']
        },
        web: {
            id: 'web-select',
            title: 'Web',
            defaultChainEl: ['home', 'web']
        },
        photo: {
            id: 'photo-select',
            title: 'Photo',
            defaultChainEl: ['home', 'gallery', 'photo']
        },

        book: {
            id: 'book-select',
            title: 'Book',
            defaultChainEl: ['home', 'gallery', 'photo', 'book']
        },
        gallery: {
            id: 'gallery-select',
            title: 'Gallery',
            defaultChainEl: ['home', 'gallery']
        },

        composite: {
            id: 'composite-select',
            title: 'Comcard',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite']
        },
        customCard: {
            id: 'custom-composite-select',
            title: 'Make a custom comcard',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite', 'customComposite']
        },
        defaultCard: {
            id: 'default-composite-select',
            title: 'Download default version',
            defaultChainEl: ['home', 'gallery', 'photo', 'composite', 'defaultComposite']
        },
        snapshots: {
            id: 'snapshots-select',
            title: 'Snapshots',
            defaultChainEl: ['home', 'gallery', 'photo', 'snapshots'],
        },
        video: {
            id: 'video-select',
            title: 'Video',
            defaultChainEl: ['home', 'gallery', 'video']
        },
        agencies: {
            id: 'agencies-select',
            title: 'Agencies',
            defaultChainEl: ['home', 'agencies'],
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
            },
        },
        dancing: {},
        commercial: {}
}