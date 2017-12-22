// "use strict";

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewPropTypes
} from 'react-native';

export default class CountDownButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timerCount: this.props.timerCount || 60,//default 60s
            timerTitle: this.props.timerTitle || "Get Captcha",
            counting: false
        }
    }

    static propTypes = {
        style: ViewPropTypes.style,
        textStyle: Text.propTypes.style,
        onClick: PropTypes.func,
        disableColor: PropTypes.string,
        timerTitle: PropTypes.string,
        enable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        onTimerEnd: PropTypes.func,
        timerActiveTitle: PropTypes.array,//if set, title = timerActiveTitle[0] + 10 + timerActiveTitle[1]
        timerCount: PropTypes.number
    }



    /** Start counting down */
    _countDownAction = () => {
        const duration = this.state.timerCount;
        const { timerActiveTitle, timerTitle } = this.props;
        const now = Date.now();
        const timeEndStamp = now + duration*1000;
        //setInterval( ()=>void, time)
        this.interval = setInterval(()=>{
            const nowStamp = Date.now();
            //when time out
            if (nowStamp >= timeEndStamp){
                //clear timer
                this.interval&&clearInterval(this.interval);
                //reset state
                this.setState({
                    timerCount: this.props.timerCount || 60,//default 60s
                    timerTitle: this.props.timerTitle || "Captcha",
                    counting: false
                });
                //on back on father
                if(this.props.onTimerEnd){
                    this.props.onTimerEnd();
                }
                return;
            }
            //refresh UI per second
            var timeLeft = timeEndStamp - nowStamp
            timeLeft = parseInt(timeLeft/1000)
            //default tip
            let activeTitle = 'Reget at '+ timeLeft+ 's';
            //if user designed
            if(timerActiveTitle){
                if (timerActiveTitle.length > 1){
                    activeTitle = timerActiveTitle[0] + timeLeft+ timerActiveTitle[1]
                }else if(timerActiveTitle.length > 0){
                    activeTitle= timerActiveTitle[0] + timeLeft;
                }
            }
            this.setState({
                timerCount: timeLeft,
                timerTitle: activeTitle
            })

        }, 1000);
    }

    /** interface should start counting */
    _shouldStartCounting = (shouldStart) => {
        if (this.state.counting) return;
        // start counting
        if (shouldStart){
            this._countDownAction()
            this.setState({counting: true})
            return
        }
    }

    componentWillMount(){
        clearInterval(this.interval)
    }

    render() {
        const { onClick, style, textStyle, enable, disableColor } = this.props;
        const { counting, timerTitle } = this.state;
        return (
            <TouchableOpacity style={[this.props.style, styles.viewStyle]}
            activeOpacity={counting? 1: 0.8 }
            onPress={ ()=>{
                console.log('Press start in CDButton');
                if(!counting && enable){
                    //start counting
                    //call back father component
                    onClick(this._shouldStartCounting);
                }
            } }>
                <View style={styles.textWrapper}>
                    <Text style={[styles.textStyle, {color:(
                        (!counting && enable) ?
                        (textStyle? textStyle.color: 'orange'):
                        disableColor || 'gray'
                    )}]}>
                        {timerTitle}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({

    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4
    },
    textWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
        },
    textStyle: {
        textAlign: 'center'
        // backgroundColor: 'deepskyblue'
    }
});