importScripts('static/vendor/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
    '/react-starter-kit/',
    '/react-starter-kit/view2',
    '/react-starter-kit/view3',
    'index.html',
    'static/bundle.js',
    'static/manifest.json',
    'static/images/icons/icon-72x72.png',
    'static/images/icons/icon-96x96.png',
    'static/images/icons/icon-128x128.png',
    'static/images/icons/icon-144x144.png',
    'static/images/icons/icon-152x152.png',
    'static/images/icons/icon-192x192.png',
    'static/images/icons/icon-256x256.png',
    'static/images/icons/icon-384x384.png',
    'static/images/icons/icon-512x512.png',
    'static/vendor/sw-toolbox.js'
]);
toolbox.router.get('/react-starter-kit/', toolbox.fastest);
toolbox.router.get('/react-starter-kit/view2', toolbox.fastest);
toolbox.router.get('/react-starter-kit/view3', toolbox.fastest);
toolbox.router.get('index.html', toolbox.fastest);
toolbox.router.get('static/bundle.js', toolbox.fastest);
toolbox.router.get('static/manifest.json', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-72x72.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-96x96.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-128x128.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-144x144.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-152x152.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-192x192.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-256x256.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-384x384.png', toolbox.fastest);
toolbox.router.get('static/images/icons/icon-512x512.png', toolbox.fastest);
toolbox.router.get('static/vendor/sw-toolbox.js', toolbox.fastest);
