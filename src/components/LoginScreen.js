import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, View} from 'react-native';
import authAction from "../actions/auth";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const LoginScreen = ({actions}) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Screen A
        </Text>
        <Text style={styles.instructions}>
            This is great
        </Text>
        <Button
            onPress={actions.login}
            title="Log in"
        />
    </View>
);

LoginScreen.propTypes = {
    actions: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
