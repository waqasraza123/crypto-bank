import React from 'react';
import AppNavigator from './resources/views/nav/nav';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { FIREBASE_GOOGLE_WEB_CLIENT_ID } from '@env';

export default function App() {

  // Initialize the Google SDK
//   GoogleSignin.configure({
//     webClientId: FIREBASE_GOOGLE_WEB_CLIENT_ID,
//   });

  return <AppNavigator />;
}