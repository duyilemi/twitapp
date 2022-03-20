import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA8d9BJbDD6Z27Ss5dpZa3zxqDqQURAyFQ',
  authDomain: 'twitapp-99341.firebaseapp.com',
  projectId: 'twitapp-99341',
  storageBucket: 'twitapp-99341.appspot.com',
  messagingSenderId: '157599670531',
  appId: '1:157599670531:web:0517cd2d2fb535a5e7c936',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
