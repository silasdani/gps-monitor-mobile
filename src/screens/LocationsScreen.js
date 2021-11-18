import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps';

export class LocationsScreen extends Component {

    render() {
        const { latitude, longitude } = this.props.route.params.location.coords;
        console.warn(this.props)
        return (
            <View style={styles.screen}>
                <Text>LocationsScreen</Text>
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    // {...this.props.route.params}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {/* {this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))} */}
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
