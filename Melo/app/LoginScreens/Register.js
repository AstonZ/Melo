import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Register extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Register Page
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

export default Register;