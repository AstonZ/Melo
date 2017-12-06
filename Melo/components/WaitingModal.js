import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    ActivityIndicator
} from 'react-native';

export default class WaitingModal extends Component {
    render (){
        return (
            <Modal transparent={true}
            onRequestClose={()=>{}}
            visible={this.props.show}
            >
                {
                    <View style={styles.mainView}>
                        <View style={styles.contentView}>
                            <Text style={styles.textStyle}>
                            </Text>
                            <ActivityIndicator animating={true}
                            color={'blue'}
                            size={'large'}>
                            </ActivityIndicator>
                        </View>
                    </View>
                }
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)'
    },

    contentView: {
        backgroundColor: 'white'
    },

    textStyle: {
        fontSize: 30,
        margin: 30
    }
});