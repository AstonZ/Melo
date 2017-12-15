import React, {Component} from 'react';
// import { Provider } from 'react-redux';
// import configStore from './store/configStore';
import { LoginStack } from './config/router';

// const store = configStore();

export default class Melo extends Component {
    render(){
        return (
        // <Provider store={store}>
            <LoginStack/>
        // </Provider>
        )
    }
}

