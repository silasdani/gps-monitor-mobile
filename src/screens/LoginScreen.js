import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>LoginScreen</Text>
                <Button title="Submit" onPress={() => { this.props.navigation.navigate('Dashboard') }} />
            </View>
        )
    }
}

export default LoginScreen

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })
