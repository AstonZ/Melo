import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Me extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Me Info
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

export default Me;