import React, { Component } from 'react'
import { Button, Text, TextInput, View, Dimensions } from 'react-native'
import api from '../api/user'

export class LoginScreen extends Component {
    state = {
        credentials: {
            email: '',
            password: ''
        },
        remember_me: false,
        errorMessage: {
            globalError: '',
            password: '',
            email: '',
        },
    }

    onEmailChange = (e) => {
        this.setState({
            credentials: { ...this.state.credentials, email: e },
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            credentials: { ...this.state.credentials, password: e },
        });
    }

    onLogin = () => {
        api.user.login(this.state.credentials).then((answer) => {
            if (!!answer.data?.id) this.props.navigation.push('Dashboard', answer);
            else {
                console.warn(answer)
                this.setState({ ...this.state, errorMessage: {...this.state.errorMessage, globalError: "Invalid email or password!"} })
            }
        }).catch(res => res)
    }

    render() {

        return (
            <View style={styles.screen}>
                <View>
                    {!!this.state.errorMessage.globalError && <Text style={styles.errorMessage}>{this.state.errorMessage.globalError}</Text>}
                </View>
                <Text>Email</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={this.onEmailChange}
                    label='Email'
                    style={styles.input}
                />
                <View>
                    {!!this.state.errorMessage.email && <Text style={styles.errorMessage}>{this.state.errorMessage.email}</Text>}
                </View>
                <Text>Password</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={this.onPasswordChange}
                    label='Password'
                    secureTextEntry={true}
                    style={styles.input}
                />
                <View>
                    {!!this.state.errorMessage.password && <Text style={styles.errorMessage}>{this.state.errorMessage.password}</Text>}
                </View>

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin}
                />
            </View>
        )
    }
}

export default LoginScreen

const { width, height } = Dimensions.get('window');

const styles = {
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFF',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
    },
    inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        width: width - 30,
    },
}