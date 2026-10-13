// TECMOPIA Web Push Service Worker
// Firebase config is public client configuration. Do not put service-account secrets here.

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification && event.notification.data && event.notification.data.url;
  if (!url) return;

  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(list => {
      for (const client of list) {
        if ('focus' in client) {
          if ('navigate' in client) client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  "apiKey": "AIzaSyD93d904TqIX9mTne67DWkd4W71e3aDcxM",
  "authDomain": "tecmopia-push.firebaseapp.com",
  "projectId": "tecmopia-push",
  "storageBucket": "tecmopia-push.firebasestorage.app",
  "messagingSenderId": "469386287853",
  "appId": "1:469386287853:web:5450c3536fe30f7de78ae4"
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const data = payload && payload.data || {};
  const title = data.title || 'TECMOPIA';
  const options = {
    body: data.body || '',
    tag: data.tag || 'tecmopia-webpush',
    renotify: true,
    data: {
      url: data.clickUrl || './'
    }
  };

  return self.registration.showNotification(title, options);
});
