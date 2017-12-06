import React from 'react';
import { StyleSheet, Text } from 'react-native';

var NavigationBarRouteMapper = {

    LeftButton(route, navigator, index, navState){
        let pString;
        if (route.textForLeftButton !== undefined){
            pString = route.textForLeftButton;
        } else {
            pString = 'Last Page';
        }

        if (index > 0) {
            return (
                <Text style={styles.buttonStyle}
                onPress= {()=>{
                        try {
                           route.cbForLeftButton(route.UIIndex);
                           navigator.jumpBack(); 
                        } catch (error){
                            //
                        }  
                    }
                }
                >
                {pString}
                </Text>
            );
        } 

        return (
            <Text style={[styles.buttonStyle, {color: 'red'}]}>
            {pString}
            </Text>
        );

    },

    Title(route, navigator, index, navState){
        return(
            <Text style={styles.titleStyle}>
            The NO.{route.UIIndex} Page
            </Text>
        );
    },

    RightButton(route, navigator, index, navState){

        if (navState.sceneConfigStack.length === index + 1){
            console.log('No on press for right button');
            return (
                <Text style={[styles.textStyle, {color: 'red'}]}>
                    Next
                </Text>
            );
        }

        return (
            <Text style={styles.buttonStyle}
            onPress={ ()=>{
                if (navState.sceneConfigStack.length === index + 1){
                    console.log('Can not jump forward.');
                } else {
                    navigator.jumpForward();
                }
            }
            }>
            Next
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    
    buttonStyle: {

    },

    titleStyle: {

    }
});

export default NavigationBarRouteMapper;