import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default async function googleSignIn() {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = GoogleAuthProvider.credential(idToken);
        const auth = getAuth();
        const user = await signInWithCredential(auth, googleCredential);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}
