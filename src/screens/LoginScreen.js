import React from 'react'
import { View, Text, Dimensions, StyleSheet, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';

import FormTextInput from '../components/FormTextInput';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';

import { connect } from 'react-redux';
import { login } from '../redux/userDuck';
import Spinner from '../components/Spinner';

class LoginScreen extends React.Component {
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

        this.props.login({ email: email, password: password })
            .then(() => {
                if (!!this.props.user) this.props.navigation.push('Dashboard', this.props.user);
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
            <>
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

                </KeyboardAwareScrollView>
                <Modal
                    visible={this.props.spinner}
                    transparent={true}
                >
                    <Spinner />
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        spinner: state.spinner
    }
}

export default connect(mapStateToProps, { login })(LoginScreen)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        height: '100%',
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
