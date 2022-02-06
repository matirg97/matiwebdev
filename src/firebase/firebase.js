import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyCmS9_okJwex9BTnuRutg58by37zbxcg58",
        authDomain: "matiwebdev.firebaseapp.com",
        projectId: "matiwebdev",
        storageBucket: "matiwebdev.appspot.com",
        messagingSenderId: "939668738255",
        appId: "1:939668738255:web:4ebe769534f0735e4527ba"
    }
)

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}