import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../LoginScreens/Login';
import Register from '../LoginScreens/Register';
import Me from '../SettingScene/Me'

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

export const RootTabs = TabNavigator({
    LoginTab: {
        screen: LoginStack,
        navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor}/>
        }
    },

    SettingsTab: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({tintColor}) => <Icon name='account-circle' size={35} color={tintColor}/>
        }
    }
});
