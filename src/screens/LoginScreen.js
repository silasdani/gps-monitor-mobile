import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';

import FormTextInput from '../components/FormTextInput';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';

import api from '../api/user'

export class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: '',
    }

    hasMissingFields = () => {
        const requiredFields = ["email", "password"]
        for (let field of requiredFields || []) {
            if (!this.state[field] || this.state[field]?.length === 0 || this.state[field]?.toString().trim() === '') {
                if (this.state[field] !== 0) {
                    return true;
                }
            }
        }

        return false;
    };

    clearLoginError = () => {
        this.setState({
            ...this.state,
            errorMessage: '',
        });
    }

    onLogin = () => {
        const { email, password } = this.state;

        api.user.login({ email: email, password: password })
            .then((user) => {
                if (!!user.data?.id) this.props.navigation.push('Dashboard', user);
                else {
                    this.setState({
                        ...this.state,
                        errorMessage: "Invalid email or password!"
                    })
                }
            });
    }

    onEmailChange = (value) => {
        this.setState({
            ...this.state,
            email: value
        });
    }

    onPasswordChange = (value) => {
        this.setState({
            ...this.state,
            password: value
        });
    }

    render() {
        const { errorMessage } = this.state;

        return (
            <KeyboardAwareScrollView
                extraHeight={120}
                enableOnAndroid
                style={styles.container}
                bounces={false}
                enableResetScrollToCoords={false}
                keyboardOpeningTime={1}
            >
                <Spacer height={26} />

                <FormTextInput
                    name="email"
                    labelText="Email"
                    hasError={!!errorMessage}
                    keyboardType="email-address"
                    onChange={this.onEmailChange}
                    value={this.state.email}
                />

                <Spacer height={8} />

                <FormTextInput
                    name="password"
                    labelText="Password"
                    secureTextEntry={true}
                    hasError={!!errorMessage}
                    onChange={this.onPasswordChange}
                    value={this.state.password}
                />
                {!!errorMessage && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>{errorMessage}</Text>
                    </View>
                )}

                <Spacer height={16} />

                <CustomButton
                    disabled={this.hasMissingFields()}
                    onPress={this.onLogin}
                >
                    LOG IN
                </CustomButton>

                <Spacer height={35} />
            </KeyboardAwareScrollView>
        )
    }
}

export default LoginScreen

// Calculate width of half width boxes that take into account margins and spacing.
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        height: height,
    },
    errorContainer: {
        height: 26,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    error: {
        color: Colors.error,
        fontWeight: '600',
        fontFamily: Fonts.bodyText,
    },
});
