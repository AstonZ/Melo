import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native'

import TextField from '../components/Input/TextField'
import CaptchaField from './registComponents/CaptchaField'
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile: this.props.mobile || 'Input Your Mobile',
            errorMobile: ''
        }
    }
    static propTypes = {
        mobile: PropTypes.string
    }

    render(){
        const {mobile, errorMobile} = this.state;   
        
        // static propTypes = {
        //     style: ViewPropTypes.style,
        //     textStyle: Text.propTypes.style,
        //     onClick: PropTypes.func,
        //     disableColor: PropTypes.string,
        //     timerTitle: PropTypes.string,
        //     enable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        //     onTimerEnd: PropTypes.func,
        //     timerActiveTitle: PropTypes.array,
        //     timerCount: PropTypes.number
        // }

        return (
            <View style={styles.container}>
                <TextInput style={styles.mobile}
                value={this.state.text}
                placeholder={'Input Your Mobile'}
                keyboardType={'numeric'}
                maxLength={11}
                onChangeText= {(text)=>this.setState({mobile: text})}                
                />
                {/* <CountDownButton
                style={styles.cdButton}
                textStyle = {{color: 'orange', fontSize: 16}}
                //  ShouldStartCounting 变量哪里来的 
                onClick={(shouldStartCounting)=>{
                    this._requestAPI(shouldStartCounting);
                }}
                disabableColor={'red'}
                timerTitle={'Left: '}
                enable={true}
                onTimerEnd = { ()=> {
                    console.log('Now timer is end !')
                }}
                timerActiveTitle={ ['Active Left ', 's'] }
                timerCount={20}
                /> */}
                <CaptchaField style={styles.captchaStyle}/>
                {/* <Button small
                    style = {{marginTop: 30}}
                    buttonStyle={{backgroundColor: 'grey', borderRadius: 5}}
                    textStyle={{textAlign: 'center'}}
                    title={'Register'}
                    onPress={this.onGoRegister}
                /> */}
            </View>
        );
    }

    _requestAPI = (shouldStartCounting)=>{

    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',//vertical
        // justifyContent: 'center'
        },

    mobile:{
        // top: 80,
        marginTop:60,
        width: 320,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center'
    },

    captchaStyle: {
        marginTop: 40,
        width: 320,
        height: 48
    },


    regisButton: {
        width: 100,
        marginTop: 40,
        height: 40,
        borderRadius: 5
    }

});

export default Register;