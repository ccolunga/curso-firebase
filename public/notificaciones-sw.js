importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDsrg8WhnxSCbwLQn9gzTgVlbv1a6MAvps",
    projectId: "videoblogplatzi-4151f",
    messagingSenderId: "210356997080",
    appId: "1:210356997080:web:00267d651217120cd980ad"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
    const tituloNotificacion = 'Ya tenemos un nuevo post'
    const opcionesNotificacion = {
        body: payload.data.titulo,
        icon: 'icons/icon_new_post.png',
        click_action: "videoblogplatzi-4151f.firebaseapp.com"
    }

    return self.ServiceWorkerRegistration.showNotification(
        tituloNotificacion,
        opcionesNotificacion
    )
})