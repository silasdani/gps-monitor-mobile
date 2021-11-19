import React, { Component } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'

export class SignUpScreen extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
        termsAndConditions: false,
    }

    go = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true) {
            alert('valid');
        }
        else {
            alert();
        }

    }

    onSignUp = () => {
        const { username, password } = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Name</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Email'
                    style={styles.input}
                />
                <Text>Email</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Email'
                    style={styles.input}
                />
                <Text>Password</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    label='Password'
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Text>Password Confirm</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    label='Password'
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Sign Up'}
                    style={styles.input}
                    onPress={this.onSignUp}
                />
            </View>
        );
    }
}

export default SignUpScreen;

const styles = {
    container: {
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
};