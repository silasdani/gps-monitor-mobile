import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import Constants from '../utils/Constants';
import Colors from '../utils/Colors';
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
    }

    onRegionChange = (region) => {
        this.setState({ region });
    }

    render() {
        console.warn(this.props.locations)
        return (
            <View style={styles.container}>
                <MapView
                    // initialCamera={10}
                    style={StyleSheet.absoluteFillObject}
                    provider={MapView.PROVIDE_GOOGLE}
                    region={this.state.region}
                // onRegionChange={this.onRegionChange}
                >
                    {this.props.locations?.map((marker) => (
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
                    onPress={() => (this.props.sendCurrentLocation(this.props.currentLocation))}
                >
                    PUSH LOCATION
                </CustomButton>
            </View >
        )
    }
}

const mapStateToProps = (state) => {
    const { locations, currentLocation } = state.location;

    return {
        locations,
        currentLocation,
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
