import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAzKE8kXqunSUrEEtHxupqj5J297N0i6wI",
    authDomain: "chat-app-with-react-native.firebaseapp.com",
    databaseURL: "https://chat-app-with-react-native.firebaseio.com",
    projectId: "chat-app-with-react-native",
    storageBucket: "",
    messagingSenderId: "196433489058",
    appId: "1:196433489058:web:903c353bf78fe83160bbfb",
    measurementId: "G-LK04DXB940"
  };
 
  firebase.initializeApp(firebaseConfig);
  export default firebase;