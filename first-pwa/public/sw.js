importScripts('/__/firebase/4.12.0/firebase-app.js');
importScripts('/__/firebase/4.12.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

const cacheName = 'v1';
var STATIC_CACHE_NAME = 'static_' + cacheName;
const messaging = firebase.messaging();

self.addEventListener('install', event => {
    console.log('install');
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                './',
                './main.js'
            ]).then(() => {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', event => {
    console.log('activate');
    event.waitUntil(
        caches.keys().then(function(keys) {
            var promises = [];
            keys.forEach(function(cacheName) {
                if (cacheName != STATIC_CACHE_NAME)
                    promises.push(caches.delete(cacheName));
            });
            return Promise.all(promises);
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('fetch');
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// アプリがバックグラウンドにある場合にプッシュ通知が届いた場合にログ出力
// https://firebase.google.com/docs/cloud-messaging/js/receive?hl=ja
messaging.setBackgroundMessageHandler(payload => {
    console.log(payload);
    const title = 'Background Message Title';
    const options = {
        body: 'Background Message body.'
    };

    return self.registration.showNotification(title, options);
});