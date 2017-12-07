import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { 
    Button,
 } from 'react-native-elements';
import TextField from '../../components/Input/TextField';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            nameEror:null
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {/* <FormLabel>EmailAdress or Phone Number</FormLabel> */}
                {/* <FormInput style={styles.formStyle}
                 onChangeText={this.onNameTextChanged}/>
                <FormValidationMessage>{'Email or Cellphone Number is Required'}</FormValidationMessage> */}
                <TextField ref='tf_name'
                 style={styles.formStyle}
                header={'name'} 
                error={this.state.nameEror}
                onTextChange={this.onNameTextChanged}
                />
                <Button raised
                    icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements`}
                    />
            </View>
        );
    }

    onNameTextChanged = (text) => {
        console.log('textChanged:' + text);
        if (text.length>5){
            this.setState({nameEror: "Too Long!"});
        }else{
            this.setState({nameEror: null});
        }
    };


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

export default Login;