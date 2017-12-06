import React, { component, Component } from 'react';
import {
    Navigator, PixelRatio
}from 'react-native';
import ImageDisplayer from './ImageDisplayer'
import NavigationBarRouteMapper from './NavigationBarRouteMapper';

let pixcelRatio = PixelRatio.get();

export default class MLNavigator extends Component {
    
    constructor(props){
        super(props);
        this.touchtime=0;
        this.switchSceneStyle = Navigator.sceneConfigs.PushFromRight;
        this.initialRoute = {
            UIIndex:0,
            cfForLeftButton:this.callbackforLeftButton
        };
        this.renderScene = this.renderScene.bind(this);
        this.changeStateVarBeforeRoute = this.changeStateVarBeforeRoute.bind(this);
        this.configScene = this.configScene.bind(this);
    }

    renderScene(router, navigator){
        return (
            <ImageDisplayer 
            navigator={navigator}
            textForLeftButton={'new text'}
            cbForLeftButton={this.callbackforLeftButton}
            UIIndex={this.state.UIIndex}
            textPrompt={this.state.textPrompt}
            callback={this.changeStateVarBeforeRoute}
            />
        );
    }

    callbackforLeftButton(aNum){
        console.log('call back function received number : ' + aNum);
    }

    configScene(route){
        return this.switchSceneStyle;
    }

    render(){
        return (
        <Navigator initialRoute={this.initialRoute}
        configScene={this.switchSceneStyle}
        navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper}/>}
        renderScene={this.renderScene}
        />
        )
    }

    changeStateVarBeforeRoute(){
        this.touchtime++;
        let textPrompt;
        switch(this.touchtime % 4){
            case 0:
            textPrompt="PushFromRight";
            this.switchSceneStyle=Navigator.SceneConfigs.PushFromRight;
            break;
            textPrompt="FloatFromRight";
            this.switchSceneStyle=Navigator.SceneConfigs.PushFromRight;
            case 1:
            break;
            textPrompt="FloatFromLeft";
            this.switchSceneStyle=Navigator.SceneConfigs.PushFromRight;
            case 2:
            break;
            textPrompt="FloatFromBottom";
            this.switchSceneStyle=Navigator.SceneConfigs.PushFromRight;
            default:
            break;
        }
        this.setState({
           textPrompt,
           UIIndex:this.state.UIIndex+1 
        });

    }

}
