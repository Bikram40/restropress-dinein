var firebaseObj;
var messaging;
var registration;

async function initFBMsg(firebaseConfig) {
    var serviceWorkerVersion = '4022736760';
    firebaseObj = await firebase.initializeApp(firebaseConfig);

    let promise = new Promise(function (resolve, reject) {
        var baseherf = document.getElementsByTagName('base')[0].href;
        navigator.serviceWorker.register(baseherf + "/firebase-messaging-sw.js?v=" +serviceWorkerVersion)
            .then((registration2) => {
            console.log('WEB-firebase messaging init.. ');
                messaging = firebaseObj.messaging();
                registration = registration2;
                // messaging.useServiceWorker(registration);
                // Request permission and get token.....
                resolve(true);

            }).catch(error => {
                reject(error);
            });
    });
    await promise;
}

async function deleteToken() {
    await messaging.deleteToken();
    console.log('WEB-firebase messaging deleteToken.. ');
}

async function getToken(vapidKey) {
    var token = await messaging.getToken({
        vapidKey: vapidKey,
        serviceWorkerRegistration: registration,
    });
    console.log('WEB-firebase messaging token..  '+token);
    return token;
}

