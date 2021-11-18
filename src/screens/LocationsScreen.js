import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';

export class LocationsScreen extends Component {
    render() {
        console.warn(this.props)
        return (
            <View style={styles.screen}>
                <Text>LocationsScreen</Text>
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    {...this.props.route.params}
                >

                </MapView>
            </View>
        )
    }
}

export default LocationsScreen

const styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
