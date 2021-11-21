import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

export class LocationsScreen extends Component {
    constructor() {
        super();
    }

    state = {
        markers: [],
    }

    addNewMarker = (coords) => {
        let markers = this.state.markers;
        markers.push({
            latlng: coords,
            title: markers.length + 1
        })
        this.setState({ markers })
    }

    componentDidMount() {
        this.addNewMarker(this.props.route.params?.location?.coords)
        this.props.route.params?.locations?.map(location => {
            this.addNewMarker({
                latitude: Number(location?.attributes?.latitude),
                longitude: Number(location?.attributes?.longitude),
            })
        })
    }
    render() {
        const { latitude } = this.props.route.params?.location?.coords || 47.221;
        const { longitude } = this.props.route.params?.location?.coords || 34.332;

        return (
            <View style={styles.screen}>
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    {...this.props.route.params}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {this.state.markers?.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.latlng}
                            title={marker.title.toString()}
                        />
                    ))}
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
