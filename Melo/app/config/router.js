import React from 'react';
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
// import { Icon } from 'react-native-elements';
// import { connect } from 'react-redux';

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

// // 在这个方法给APP增加 navigation state
// const AppWithNavigationState = ({dispatch, nav}) => {
//     <LoginStack navigation={addNavigationHelpers({ dispatch, state: nav})}/>
// }

// const mapStateToProps = state => {
//     nav: state.nav
// }

// export default connect(mapStateToProps)(AppWithNavigationState);
