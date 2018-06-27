import React from 'react';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';
import thunk from 'redux-thunk'

const store = createStore(
    AppReducer,
    applyMiddleware(middleware, thunk),
);

export default class App extends React.Component {

    constructor() {
        super();
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}