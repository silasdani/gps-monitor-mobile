import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function DashboardScreen() {
    return (
        <View style={styles.screen}>
            <Text>Location</Text>
            <Text>{"My location"}</Text>
            <Button title="Add Location" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
