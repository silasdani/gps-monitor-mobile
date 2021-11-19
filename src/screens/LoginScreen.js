import React, { Component } from 'react'
import { Button, Text, TextInput, View, Dimensions } from 'react-native'
import user from '../api/user'

export class LoginScreen extends Component {
    state = {
        credentials: {
            email: '',
            password: ''
        },
        remember_me: false,
        erroeMessage: '',
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
        console.warn(this.state.credentials)
        user.user.login(this.state.credentials).then((user) => {
            this.props.navigation.navigate('Dashboard', user);
        }).catch(res => console.warn(res))
    }

    render() {

        return (
            <View style={styles.screen}>
                <Text>Email</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={this.onEmailChange}
                    label='Email'
                    style={styles.input}
                />
                <Text>Password</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={this.onPasswordChange}
                    label='Password'
                    secureTextEntry={true}
                    style={styles.input}
                />

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
}