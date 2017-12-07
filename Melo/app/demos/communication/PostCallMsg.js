import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class PostCallMsg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLine}/>
                <TouchableOpacity onPress={this._postMsgByCallBack}>
                    <Text>Callback</Text>
                </TouchableOpacity>
            </View>
        );
    }


    _postMsgByCallBack=()=>{
        if(this.props.onChangeMsg){
            this.props.onChangeMsg();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },

});