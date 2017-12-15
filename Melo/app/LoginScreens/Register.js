import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
    TextInput
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
                value={"2312312"}
                onChangeText= {(text)=>this.setState({mobile: text})}                
                />
                <CountDownButton
                style={styles.cdButton}
                textStyle = {{color: 'orange', fontSize: 16}}
                /** ShouldStartCounting 变量哪里来的 */
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
                />
            </View>
        );
    }

    _requestAPI = (shouldStartCounting)=>{

    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },

    mobile:{
        top:100,
        width: 200
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