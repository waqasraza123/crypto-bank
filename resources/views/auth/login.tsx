import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signIn } from './auth';
import { useNavigation } from '@react-navigation/native';
// import googleSignIn from "./google-signin";
// import twitterSignIn from "./twitter-signin";

const LoginScreen: React.FC = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await signIn(email, password);
        if (result.success) {
            console.log('User logged in successfully');
        } else {
            console.log('Error:', result.error);
        }
    };

    return (
        <View style={{ padding: 16, flex: 1, justifyContent: 'center' }}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                left={<TextInput.Icon name={() => <Icon name="email-outline" size={20} />} />}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                mode="outlined"
                style={{ marginTop: 16 }}
                left={<TextInput.Icon name={() => <Icon name="lock-outline" size={20} />} />}
            />
            <Button mode="contained" onPress={handleLogin} style={{ marginTop: 16 }}>
                Log In
            </Button>

            {/*<Button icon="google" mode="contained" onPress={googleSignIn}>*/}
            {/*    Sign in with Google*/}
            {/*</Button>*/}

            {/*<Button icon="twitter" mode="contained" onPress={twitterSignIn}>*/}
            {/*    Sign in with Twitter*/}
            {/*</Button>*/}

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text>Don't have an account?</Text>
                <Button onPress={() => navigation.navigate('SignUp')} compact>
                    Sign Up
                </Button>
            </View>
        </View>
    );
};

export default LoginScreen;