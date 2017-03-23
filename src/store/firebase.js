import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'snipmarks.firebaseapp.com',
  databaseURL: 'https://snipmarks.firebaseio.com',
  storageBucket: 'snipmarks.appspot.com',
  messagingSenderId: '305376197347'
})

export default firebaseApp.database()
