import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image
} from 'react-native';

var image1 = require('../../resource/images/1.jpg');
var image2 = require('../../resource/images/2.jpg');

let pixelRatio = PixelRatio.get();

export default class ImageDisplayer extends Component {
    changeScene = ()=>{
        this.props.callback();
        console.log('before push');
        this.props.navigator.push({
            name:'1',
            UIIndex: this.props.UIIndex + 1,
            cbForLeftButton: this.props.cbForLeftButton
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.changeScene}>
                    {
                        (this.props.UIIndex%2 === 0)?
                        (
                           <Image style={styles.imageStyle}
                           source={image1}/> 
                        ):(
                            <Image style={styles.imageStyle}
                            source={image2}/>
                        )
                    }
                </TouchableOpacity>
                <Text style={styles.textStyle}>
                {this.props.textPrompt}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        width: 1080/pixelRatio/2,
        height: 1920/pixelRatio/2
    },

    textStyle: {
        fontSize: 30,
        top: 50,
        left: 5
    }
});

