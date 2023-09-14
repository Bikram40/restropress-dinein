importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
      apiKey: "AIzaSyDEvEze3B3j3PDdiGCLVlex-t4dWEckatk",
      authDomain: "restropress-user-app.firebaseapp.com",
      projectId: "restropress-user-app",
      storageBucket: "restropress-user-app.appspot.com",
      messagingSenderId: "646824356848",
      appId: "1:646824356848:web:90a6853be0cdac3eac4b35",
      measurementId: "G-SS6ESHVKW5"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    const promiseChain = self.clients
                .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
                .then((windowClients) => {
                    for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
                }
                })
        .then(() => {

        });

//    const notificationTitle = payload.notification.title;
////    self.localStorage.setItem('testObject', JSON.stringify(payload));
// console.log('endpoint:', payload);
//            self.registration.active.postMessage(JSON.stringify(payload));
//            console.log("Posted message");
//window.dartFunc(notificationTitle);

//    const notificationOptions = {
//      body: payload.notification.body,
//    };
//
//    self.registration.showNotification(notificationTitle,
//      notificationOptions);
  });