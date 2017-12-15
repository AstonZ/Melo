import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { 
    Button,
 } from 'react-native-elements';

import TextField from '../components/Input/TextField';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            mobile:'',
            password:'',
            errorMobile: '',
            errorPassword: ''
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('receive new props = '+ nextProps);
        console.log('Store = ', this.props.store);
    }

    render(){
        const { onSubmit } = this.props;
        const { errorMobile, errorPassword } = this.state;
        return (
            <View style={styles.container}>
                <TextField
                ref='mobileInput'
                style={styles.formStyle}
                header={'Mobile'} 
                error={errorMobile}
                onTextChange={this.onMobileTextChange}
                />
                <TextField
                ref='tf_pw'
                style={styles.formStyle}
                header={'Password'} 
                error={errorPassword}
                onTextChange={this.onPasswordTextChange}
                />
                <Button small
                    // icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: 'orange', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={'Login'}
                    onPress={this._checkValidate}
                />
                <Button small
                    // icon={{name: 'home', size: 32}}
                    style = {{top: 30}}
                    buttonStyle={{backgroundColor: 'grey', borderRadius: 5}}
                    textStyle={{textAlign: 'center'}}
                    title={'Register'}
                    onPress={this.onGoRegister}
                />
            </View>
        );
    }

    onMobileTextChange = text => {
        this.setState({
            mobile: text
        })
    }

    onPasswordTextChange = text => {
        this.setState({password: text});
    }

    _checkValidate = ()=> {
        const text = this.refs.mobileInput.getText();
        console.log("start navigation to register  " + text)

        const {mobile, password} = this.state;
        console.log("mobile = ", mobile, "password = ", password);
        var errorMobile = '';
        var errorPassword = '';
        if (mobile.length < 10){
            errorMobile = "mobile format error !"
        }
        if (password.length < 5){
            errorPassword = "password is required !"
        }

        if (errorMobile.length>1 || errorPassword.length>1){
            this.setState({
                errorMobile,
                errorPassword
            })
            return;
        }else{
            this.setState({
                errorMobile:'',
                errorPassword:''
            })
        }
        this.onGoRegister();
    }

    onGoRegister = () => {
        this.props.navigation.navigate('RegisterPage');
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },

    formStyle: {
        width: 100,
        marginLeft: 100,
        marginRight: 100
    }

});
