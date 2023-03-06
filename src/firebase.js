import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqBYlx29dtIqXY9h5bUfdZuowppBhyXxc",
  authDomain: "my-movie-21014.firebaseapp.com",
  projectId: "my-movie-21014",
  storageBucket: "my-movie-21014.appspot.com",
  messagingSenderId: "717573162289",
  appId: "1:717573162289:web:4ee7125e66d14a565b5c10",
  measurementId: "G-64X5R7KRM3"
};


  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)

  const db = getFirestore(app)

  export { auth, db }