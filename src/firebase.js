import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({

  apiKey: "AIzaSyDkOVBwnwG3JLHFQU5iv26zAhRvKI2TbkQ",
  authDomain: "clone-9b4a6.firebaseapp.com",
  databaseURL: "https://clone-9b4a6.firebaseio.com",
  projectId: "clone-9b4a6",
  storageBucket: "clone-9b4a6.appspot.com",
  messagingSenderId: "17121879252",
  appId: "1:17121879252:web:0540b20805674bf5068741",
  measurementId: "G-ZHMG7Z0D9B"

});


const auth = firebase.auth();

export { auth };