importScripts('./vendor/sw-toolbox.js');
toolbox.options.debug = false;

toolbox.precache([
    '/react-starter-kit/',
    '/react-starter-kit/index.html',
    'bundle.js',
    'manifest.json',
    'images/icons/icon-72x72.png',
    'images/icons/icon-96x96.png',
    'images/icons/icon-128x128.png',
    'images/icons/icon-144x144.png',
    'images/icons/icon-152x152.png',
    'images/icons/icon-192x192.png',
    'images/icons/icon-256x256.png',
    'images/icons/icon-384x384.png',
    'images/icons/icon-512x512.png'
]);
toolbox.router.get('/react-starter-kit/', toolbox.fastest);
toolbox.router.get('/react-starter-kit/index.html', toolbox.fastest);
toolbox.router.get('bundle.js', toolbox.fastest);
toolbox.router.get('manifest.json', toolbox.fastest);
toolbox.router.get('images/icons/icon-72x72.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-96x96.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-128x128.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-144x144.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-152x152.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-192x192.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-256x256.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-384x384.png', toolbox.fastest);
toolbox.router.get('images/icons/icon-512x512.png', toolbox.fastest)
