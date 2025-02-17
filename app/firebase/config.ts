import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey : process.env.NEXT_PUBLIC_API_KEY,
    authDomain : process.env.NEXT_PUBLIC_AUTH_DOMAIN, 
    projectId : process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket : process.env.NEXT_PUBLIC_PROJECT_BUCKET,
    messagingSenderId : process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId : process.env.NEXT_PUBLIC_APP_ID, 
    measurementId : process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

//initialize Firebase 
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app); 

export { app, auth }