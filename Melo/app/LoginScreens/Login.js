import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Login extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Login Page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

});

export default Login;