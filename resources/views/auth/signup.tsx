import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signUp } from './auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen: React.FC = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        const result = await signUp(email, password);
        if (result.success) {
            console.log('User signed up successfully');
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
            <Button mode="contained" onPress={handleSignUp} style={{ marginTop: 16 }}>
                Sign Up
            </Button>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <Text>Already have an account?</Text>
                <Button onPress={() => navigation.navigate('Login')} compact>
                    Log In
                </Button>
            </View>
        </View>
    );
};

export default SignUpScreen;