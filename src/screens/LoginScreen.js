import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        remember_me: false,
    }

    render() {
        
        return (
            <View style={styles.screen}>
                <Text>LoginScreen</Text>
                <Button title="Submit" onPress={() => { this.props.navigation.navigate('Dashboard') }} />
            </View>
        )
    }
}

export default LoginScreen

const styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}