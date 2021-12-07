import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import Constants from '../utils/Constants';
import Colors from '../utils/Colors';
import LocationSerializer from '../Serializers/LocationSerializer';
import api from '../api/user';
import { sendCurrentLocation } from '../redux/locationDuck'
import { connect } from 'react-redux';

class LocationsScreen extends Component {

    state = {
        region: {
            latitude: 47.543754,
            longitude: 23.897698,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
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
        const region = markers.push({

            title: markers.length + 1
        })
        this.setState({
            region: markers[region - 1],
            markers
        })
    }

    componentDidMount() {
        this.props.route.params?.locations?.map(location => {
            this.addNewMarker({
                latitude: Number(location?.attributes?.latitude),
                longitude: Number(location?.attributes?.longitude),
            })
        })
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {

        return (
            <View style={styles.container}>
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    region={this.state.region}
                // onRegionChange={this.onRegionChange}
                >
                    {this.props.markers?.map((marker) => (
                        <Marker
                            key={marker.location_title}
                            coordinate={marker.latlng}
                            title={marker.location_title}
                        />
                    ))}
                </MapView>
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

const mapStateToProps = (state) => {
    const { locations } = state.location;

    let markers = [];

    locations?.map(({ attributes }) => {
        markers.push({
            ...attributes,
            latlng: {
                latitude: Number(attributes?.latitude),
                longitude: Number(attributes?.longitude),
            },
        })
    })

    return {
        markers,
    };
}

export default connect(mapStateToProps, { sendCurrentLocation })(LocationsScreen)
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
