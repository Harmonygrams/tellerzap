import { useEffect, useState } from "react";
import { User as FirebaseUser, signOut as firebaseSignOut, browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth' 
import { auth } from '@/app/firebase/config'

export async function signIn(email:string, password : string){
    await  setPersistence(auth, browserLocalPersistence)
    const signInWithPassword = signInWithEmailAndPassword(auth, email, password)
    return signInWithPassword;
}
export async function signOut(){
    return firebaseSignOut(auth)
}

export function useUser() {
    const [ user, setUser ] = useState<FirebaseUser | null | undefined>(undefined); 
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => setUser(user))
    }, [])
    return user;
}