import React from 'react';
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import Login from '../LoginScreens/Login';
import Register from '../LoginScreens/Register';

export const LoginStack = StackNavigator({

    LoginPage: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },

    RegisterPage: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    },

});

