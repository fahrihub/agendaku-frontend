importScripts("/precache-manifest.b0b6e458d2c16eede3a2a807ae84216a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

import {clientsClaim} from 'workbox-core';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({url}) => url.pathname.startsWith('/scripts/'),
    new StaleWhileRevalidate({
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
);

registerRoute(
    ({url}) => url.pathname.startsWith('/styles/'),
    new StaleWhileRevalidate({
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
);

registerRoute(
    ({url}) => url.pathname.startsWith('/fonts/'),
    new CacheFirst({
        cacheName: 'asset',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
);
