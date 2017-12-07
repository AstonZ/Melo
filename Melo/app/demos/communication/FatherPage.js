import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';
import PostMsg from './PostMsg'
import PostCallMsg from './PostCallMsg'
import PostCallMsgAndMsg from './PostCallMsgAndMsg'

export default class Msg extends Component {
    constructor(props){
        super(props);
        this.state={
            listenerMsg:'listenerMsg',
            callMsg:'callMsg',
            callMsgAndMsg:'callMsgAndMsg'
        }
    }


    componentDidMount() {
        //注意addListener的key和emit的key保持一致
        this.msgListener = DeviceEventEmitter.addListener('Msg',(listenerMsg) => {
            this.setState({
                listenerMsg:listenerMsg,
            })
        });

    }

    componentWillUnmount() {
        //此生命周期内，去掉监听
        this.msgListener&&this.msgListener.remove();
    }



    render() {
        return (
            <View style={styles.container}>
                    <Text>第一种方式  DeviceEventEmitter：</Text>
                    <Text>{this.state.listenerMsg}</Text>
                    <PostMsg  />

                    <Text>第二种方式  CallBack：</Text>
                    <Text>{this.state.callMsg}</Text>
                    <PostCallMsg  onChangeMsg={
                        this.onMsgByCall
                    }/>

                    <Text>第三种方式  CallBack有参数：</Text>
                    <Text>{this.state.callMsgAndMsg}</Text>
                    <PostCallMsgAndMsg  onChangeMsg={(msg)=>{
                        this.onMsgByCallAndMsg(msg)
                    } }/>

            </View>
        );
    }

    onMsgByCall=()=>{
        this.setState({
            callMsg:'通过CallBack修改父组件状态值'
        })
    }


    onMsgByCallAndMsg=(msg)=>{
        this.setState({
            callMsgAndMsg:msg
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
});