import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBGcIC7E9EuRnsxgpm0_wsv_xsK5WJCPJY",
    authDomain: "vuefireblogs-8051b.firebaseapp.com",
    projectId: "vuefireblogs-8051b",
    storageBucket: "vuefireblogs-8051b.appspot.com",
    messagingSenderId: "1066858125048",
    appId: "1:1066858125048:web:50d9534036659d42228d0d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {timestamp}
  export default firebaseApp.firestore()