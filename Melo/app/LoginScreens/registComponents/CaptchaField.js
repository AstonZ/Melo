import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountDownButton from '../../components/button/CountDownButton'
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native'
import { FormInput, Button } from 'react-native-elements'

export default class CaptchaField extends Component {
                /* <Button style={styles.cdButton}
                buttonStyle={{backgroundColor: 'grey', borderRadius: 5}}
                textStyle={{textAlign: 'center', fontSize: 14}}
                title={'Captcha'}
                /> */
    render() {
        return (
            <View style={[this.props.style, styles.container]}>
                <TextInput style={styles.input}
                placeholder={'Input Somthing'}/>

                <CountDownButton style={styles.cdButton}
                // textStyle={{color: 'orange'}}
                onClick={this.onGetCaptchaClick}
                disableColor={'orange'}
                timerTitle={'Captcha'}
                enable={true}
                timerCount={10}
                />
            </View>
        )
    }

    onGetCaptchaClick = shouldStartCouting => {
        console.log('User Tap Should start Counting');
        shouldStartCouting(true);
    }

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row', 
        borderRadius: 4,
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor:'white'
    },

    input: {
        margin: 4,
        height: 40,
        width:210,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },

    cdButton: {
        width:90,
        margin: 4,
    }

});