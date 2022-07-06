import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAH1cUDAqRtTN26_CpSK9NXnKxK21gEUQ4',
  authDomain: 'rhoutdoor.firebaseapp.com',
  projectId: 'rhoutdoor',
  storageBucket: 'rhoutdoor.appspot.com',
  messagingSenderId: '589983836770',
  appId: '1:589983836770:web:bd519da9e3e09e513bff3b',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
