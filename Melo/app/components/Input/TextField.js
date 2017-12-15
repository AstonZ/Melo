import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    ViewPropTypes
} from 'react-native';
import { 
    Button,
    FormLabel, FormInput, FormValidationMessage
 } from 'react-native-elements';

    /*
    props:{
        onTextChange:func,
        header:String,
        error:String
    } 
    */

 export default class TextField extends Component {

    static propTypes = {
        onTextChange: PropTypes.func, // cb for textChange
        header: PropTypes.string, // name of the Input field
        error: PropTypes.string //showed in red when input goes wrong
    }

    render() {
        return (
            <View >
                <FormLabel show={this.props.header !== null}>{this.props.header}</FormLabel>
                <FormInput
                ref='inputField' 
                shake={this.props.error !== null}
                onChangeText={this.props.onTextChange}/>
                <FormValidationMessage show={this.props.error !== null}>{this.props.error}</FormValidationMessage>
            </View>
        );
    };

    getText(){
        // const text = this.refs.inputField.input._getText();
        const text = this.refs.inputField.input._lastNativeText
        console.log("final text is ", text)
        return text;
    }

 }

 const styles = StyleSheet.create({
    container: {
        flex: 1
    }
 });

