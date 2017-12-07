import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
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

    constructor(props){
        super(props)
        this.state = {
            header: this.props.header
        }
    };

    render() {
        return (
            <View >
                <FormLabel show={this.state.header !== null}>{this.state.header}</FormLabel>
                <FormInput shake={this.state.error !== null}
                onChangeText={this.props.onTextChange}/>
                <FormValidationMessage show={this.props.error !== null}>{this.props.error}</FormValidationMessage>
            </View>
        );
    };
 }

 const styles = StyleSheet.create({

    container: {
        flex: 1
    }
 });

