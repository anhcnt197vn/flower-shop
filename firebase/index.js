import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB9GvlHBEVah09nK-2oLkMB3mzxl_RlTCk",
  authDomain: "uploadimagesss.firebaseapp.com",
  databaseURL: "https://uploadimagesss.firebaseio.com",
  projectId: "uploadimagesss",
  storageBucket: "uploadimagesss.appspot.com",
  messagingSenderId: "1009733204304",
  appId: "1:1009733204304:web:4abccb60a4db5912d3d455",
  measurementId: "G-6JCPNG6KT5"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }