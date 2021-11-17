import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class DashboardScreen extends Component {
    render() {
        return (
            <View>
                <Text>DashboardScreen</Text>
                <Text>{"My location"}</Text>
                <Button title="Add Location" />
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// })
