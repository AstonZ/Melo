import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';

export default class PostMsg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._postMsgByListener}>
                    <Text>DeviceEventEmitter</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _postMsgByListener=()=>{
        DeviceEventEmitter.emit('Msg','此消息来自于子组件，DeviceEventEmitter父组件进行修改和状态变化');
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },
});