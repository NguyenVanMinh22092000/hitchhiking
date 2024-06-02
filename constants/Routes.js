const webMenus = [
    {
        id: 'home',
        name: 'home',
        route: '/',
    },
    {
        id: 'game-rule',
        name: 'participateIn',
        route: '/cach-thuc-tham-gia',
    },
    {
        id: 'winner',
        name: 'listWinners',
        route: '/danh-sach-trung-thuong',
    },
    {
        id: 'livestream-special-dial',
        name: 'livestreamSpecialPrize',
        route: '/livestream-giai-dac-biet',
    },
    {
        id: 'privacy-policy',
        name: 'privacyPolicy',
        route: '/chinh-sach-bao-mat',
    },
    {
        id: 'activity-rules',
        name: 'activityRules',
        route: '/the-le-chuong-trinh',
    },
];

const routes = [
    {
        page: 'home',
        route: '/',
        titles: [
            'home',
        ],
    },
    {
        page: 'cach-thuc-tham-gia',
        route: '/cach-thuc-tham-gia',
        titles: [
            'participateIn',
        ],
    },
    {
        page: 'danh-sach-trung-thuong',
        route: '/danh-sach-trung-thuong',
        titles: [
            'listWinners',
        ],
    },
    {
        page: 'livestream-giai-dac-biet',
        route: '/livestream-giai-dac-biet',
        titles: [
            'livestreamSpecialDial',
        ],
    },
    {
        page: 'chinh-sach-bao-mat',
        route: '/chinh-sach-bao-mat',
        titles: [
            'privacyPolicy',
        ],
    },
    {
        page: 'the-le-chuong-trinh',
        route: '/the-le-chuong-trinh',
        titles: [
            'activityRules',
        ],
    },
    {
        page: 'tham-gia-du-thuong',
        route: '/tham-gia-du-thuong',
        titles: [
            'enterCode',
        ],
    },
];

const authRoutes = [
    // menu  
    '/config',
];

const commonRoutes = [
    '/',
    '/_error',
    '/error',
];

module.exports = { webMenus, routes, authRoutes, commonRoutes };
