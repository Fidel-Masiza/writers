import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDavEb-m8MU_wN7c7TZ5zYuI8-odG2DWGM",
  authDomain: "fypproject-91700.firebaseapp.com",
  projectId: "fypproject-91700",
  storageBucket: "fypproject-91700.appspot.com",
  messagingSenderId: "400745490918",
  appId: "1:400745490918:web:c98c2dc8c3bd946dc70e27",
  databaseURL: "https://fypproject-91700-default-rtdb.firebaseio.com",
  measurementId: "G-87Z0VBJ0ZW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default firebase;