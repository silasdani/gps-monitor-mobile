import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import Constants from '../utils/Constants';
import Colors from '../utils/Colors';
import LocationSerializer from '../Serializers/LocationSerializer';
import api from '../api/user';

export class LocationsScreen extends Component {
    constructor() {
        super();
    }

    state = {
        markers: [],
    }

    onPushLocation = () => {
        const location = LocationSerializer.serialize(this.state.location);
        api.user.addLocation(location).then((ans) => {
            this.addNewMarker(ans.data.attributes);
        }).catch(res => res)
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
        this.props.route.params?.locations?.map(location => {
            this.addNewMarker({
                latitude: Number(location?.attributes?.latitude),
                longitude: Number(location?.attributes?.longitude),
            })
        })
    }
    render() {
        // const { latlng, title } = ;
        const latlng = Object.values(this.state.markers[this.state.markers?.length - 1])
         console.warn(latlng)

        return (
            <View style={styles.container}>
                {/* <MapView
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    initialRegion={{
                        latitude: latlng.latitude,
                        longitude: latlng.longitude,
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
                </MapView> */}
                <CustomButton
                    style={styles.button}
                    disabled={false}
                    onPress={this.onPushLocation}
                >
                    PUSH LOCATION
                </CustomButton>
            </View >
        )
    }
}

export default LocationsScreen
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        height: height,
        flex: 1,
        justifyContent: 'flex-end'
    },
    innerContainer: {
        width: '100%',
        maxHeight: 3 / 4 * height,
        borderWidth: 1,
        borderColor: Colors.formTextInputBorderColor,
        backgroundColor: Colors.formTextInputBackgroundColor,
    },
    button: {
        bottom: 30,
    },
});
