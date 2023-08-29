import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../auth/signup';
import LoginScreen from "../auth/login";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log In' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
