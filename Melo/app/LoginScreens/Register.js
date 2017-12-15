import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import TextField from '../components/Input/TextField'
import CountDownButton from '../components/button/CountDownButton'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile: this.props.mobile || '',
            errorMobile: ''
        }
    }
    // ref='tf_mobile'
    // style={styles.formStyle}
    // header={'Mobile'} 
    // error={errorMobile}
    // onTextChange={this.onMobileTextChange}
    render(){
        const {mobile, errorMobile} = this.state;        
        return (
            <View style={styles.container}>
                <TextField style={styles.mobile}
                header='Mobile'
                error={errorMobile}>
                </TextField>
                <TextField>
                </TextField>
                <CountDownButton/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    mobile:{

    },

    captcha: {

    },

    cdButton: {
        width: 50
    },

    cdText: {
        color: 'orange'
    }

});

export default Register;