import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from 'react-native';
import {NavigationActions} from 'react-navigation';

import authAction from '../actions/auth';

class AuthButton extends Component {

    componentDidMount() {
        console.log('AuthButton -> componentDidMount');
    }

    render() {
        let {actions, loginScreen, isLoggedIn} = this.props;

        return (
            <Button
                title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
                onPress={isLoggedIn ? actions.logout : loginScreen}
            />
        )

    }

}

AuthButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    loginScreen: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    loginScreen: () =>
        dispatch(NavigationActions.navigate({routeName: 'Login'})),
    actions: bindActionCreators(authAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
