import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import checkPasswords from '../utils/CheckPasswordsService';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';

import FormTextInput from '../components/FormTextInput';
import CustomButton from '../components/CustomButton';

const Spacer = (props) => {
    const style = { height: props.height, width: props.width };
    return <View style={style} />;
};

export class SignUpScreen extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {
            emailError: false,
            passwordError: false,
            missingFields: false,
            errorMessage: '',
        }
    }

    hasMissingFields = () => {
        const requiredFields = ["email", "password", "name", "passwordConfirm"]
        for (let field of requiredFields || []) {
            if (!this.state[field] || this.state[field]?.length === 0 || this.state[field]?.toString().trim() === '') {
                if (this.state[field] !== 0) {
                    return true;
                }
            }
        }

        return false;
    };

    clearSignUpError = () => {
        this.setState({
            ...this.state,
            errors: {
                emailError: false,
                passwordError: false,
                missingFields: false,
                errorMessage: '',
            }
        });
    }

    handleClick = () => {
        this.clearSignUpError();

        const emailInput = this.state.email;
        const emailRegex = /^.+@.+\..+$/;

        if (!emailRegex.test(emailInput)) {
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    emailError: true,
                    errorMessage: 'Must enter a valid email address',
                },
            });
            return;
        }

        const signUp = this.state;
        const error = checkPasswords(signUp.password, signUp.passwordConfirm);
        if (error) {
            this.setState({
                ...this.state,
                errors: {
                    ...this.state.errors,
                    passwordError: true,
                    errorMessage: error,
                },
            });
            return;
        }

        this.props.navigation.navigate("Login", this.state)
    };

    onNameChange = (value) => {
        this.setState({
            ...this.state,
            name: value
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

    onPasswordConfirmChange = (value) => {
        this.setState({
            ...this.state,
            passwordConfirm: value
        });
    }

    render() {
        const errorState = this.state.errors || {};
        // TODO: Handle Synthetic element for all fields
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
                    labelText="Name"
                    onChange={this.onNameChange}
                    value={this.state.name}
                    required={true}
                />

                <Spacer height={8} />

                <FormTextInput
                    labelText="Email Address"
                    hasError={errorState.errors?.emailError}
                    keyboardType="email-address"
                    onChange={this.onEmailChange}
                    value={this.state.email}
                    required={true}
                />

                {!!errorState.errors?.errorMessage && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>{errorState.errors?.errorMessage}</Text>
                    </View>
                )}

                <Spacer height={8} />

                <FormTextInput
                    labelText="Password"
                    secureTextEntry={true}
                    placeholder="(must be at least 6 characters)"
                    hasError={errorState.errors?.passwordError}
                    onChange={this.onPasswordChange}
                    value={this.state.password}
                    required={true}
                />

                <Spacer height={8} />

                <FormTextInput
                    labelText="Confirm Password"
                    secureTextEntry={true}
                    hasError={errorState.errors?.passwordError}
                    onChange={this.onPasswordConfirmChange}
                    value={this.state.passwordConfirm}
                    required={true}
                />

                <Spacer height={16} />

                <CustomButton
                    disabled={this.hasMissingFields()}
                    onPress={this.handleClick}
                >
                    SIGN UP
                </CustomButton>

                <Spacer height={35} />
            </KeyboardAwareScrollView>
        );
    }
}

export default SignUpScreen;

// Calculate width of half width boxes that take into account margins and spacing.
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        height: height,
    },
    agreement: {
        color: Colors.formAgreementTextColor,
        fontFamily: Fonts.bodyText,
    },
    emphasis: {
        fontFamily: Fonts.bodyText,
        color: Colors.linkColor,
    },
    footerText: {
        paddingBottom: 22,
        color: Colors.formFooterTextColor,
        fontFamily: Fonts.bodyText,
        textAlign: 'center',
        fontWeight: '600',
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
