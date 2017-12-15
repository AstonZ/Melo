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
            counting: false,
            selfEable: true //
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
        timerActiveTitle: PropTypes.array,
        timerCount: PropTypes.number
    }


    render() {
        const { onClick, style, textStyle, enable, disableColor } = this.props;
        const { counting, timerTitle, selfEable } = this.state;
        return (
            <TouchableOpacity activeOpacity={counting? 1: 0.8 }
            onPress={ ()=>{
                if(!counting && enable && selfEable){
                    //start counting
                    this.setState({selfEable: false});
                    //call back father component
                    onClick(this._shouldStartCounting);
                }
            } }>
                <View style={[styles.view, style]}>
                    <Text style={[{fontSize: 16}, textStyle, {color:(
                        (!counting && enable && selfEable) ?
                        (textStyle? textStyle.color: 'blue'):
                        disableColor || 'gray'
                    )}]}>
                        {timerTitle}
                    </Text>
                </View>
            </TouchableOpacity>
        );
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
                    timerTitle: this.props.timerTitle || "Get Captcha",
                    counting: false,
                    selfEable: true //
                });
                //on back on father
                if(this.props.onTimerEnd){
                    this.props.onTimerEnd();
                }
                return;
            }
            //refresh UI per second
            const timeLeft = timeEndStamp - nowStamp;
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
            this.setState({counting: true, selfEable: false})
            return
        }
        // stop counting
            this.setState({selfEable: true})
    }

    componentWillMount(){
        clearInterval(this.interval)
    }

}

const styles = StyleSheet.create({

    view: {
        width: 120,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    }
});