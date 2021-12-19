import React from 'react';
import { StyleSheet, Dimensions, View, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import Constants from '../utils/Constants';
import Colors from '../utils/Colors';
import { sendCurrentLocation, fetchLocations } from '../redux/locationDuck'
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { showSpinner, hideSpinner } from '../redux/spinnerDuck'

class LocationsScreen extends React.Component {
    constructor(props) {
        super(props);
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
                    region={{
                        ...this.props.currentLocation?.coords,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
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
                    onPress={() => {
                        this.props.sendCurrentLocation(this.props.currentLocation);
                        this.props.fetchLocations();
                        this.props.fetchLocations();
                    }}
                >
                    PUSH LOCATION
                </CustomButton>
                <Modal
                    visible={this.props.spinner}
                    transparent={true}
                >
                    <Spinner />
                </Modal>
            </View >
        )
    }
}

const mapStateToProps = (state) => {
    const { locations, currentLocation } = state.location;

    return {
        locations,
        currentLocation,
        spinner: state.spinner,
    };
}

export default connect(mapStateToProps, { sendCurrentLocation, fetchLocations, hideSpinner, showSpinner })(LocationsScreen)
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
