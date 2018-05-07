import React from 'react';
import {YellowBox} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';
import thunk from 'redux-thunk'

const store = createStore(
    AppReducer,
    applyMiddleware(middleware),
    applyMiddleware(thunk)
);

export default class App extends React.Component {

    constructor(){
        super();
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}