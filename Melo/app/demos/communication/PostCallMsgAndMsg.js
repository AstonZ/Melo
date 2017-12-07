import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class PostCallMsgAndMsg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLine}/>
                <TouchableOpacity onPress={this._postMsgByCallBack}>
                    <Text>PostCallMsgAndMsg</Text>
                </TouchableOpacity>
            </View>
        );
    }


    _postMsgByCallBack=()=>{
        if(this.props.onChangeMsg){
            this.props.onChangeMsg('通过PostCallMsgAndMsg来传递属性');
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