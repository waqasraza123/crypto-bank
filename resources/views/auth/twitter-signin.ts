import { getAuth, TwitterAuthProvider, signInWithCredential } from "firebase/auth";
import RNTwitterSignIn from 'react-native-twitter-signin';

export default async function twitterSignIn() {
    try {
        const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();
        const twitterCredential = TwitterAuthProvider.credential(authToken, authTokenSecret);
        const auth = getAuth();
        const user = await signInWithCredential(auth, twitterCredential);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}