import firebase from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Sign up
export const signUp = async (email: string, password: string) => {
    try {
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user)
        return {
            data: user,
            success: true
        };
    } catch (error) {
        console.error(error.message);
        return {
            success: false,
            error: error.message
        };
    }
};

// Sign in
export const signIn = async (email: string, password: string) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        return { success: true };
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
};

// Sign out
export const signOut = async () => {
    try {
        await firebase.auth().signOut();
        return { success: true };
    } catch (error) {
        console.error(error.message);
        return { success: false, error: error.message };
    }
};

// Listen for Authentication State Changes
export const onAuthStateChanged = (callback: (user: firebase.User | null) => void) => {
    return firebase.auth().onAuthStateChanged(callback);
};