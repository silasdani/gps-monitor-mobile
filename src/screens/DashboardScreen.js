import React from 'react'
import { Dimensions, Text, Modal, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';
import { connect } from 'react-redux';
import { getCurrentLocation, fetchLocations } from '../redux/locationDuck'
import Spinner from '../components/Spinner';
import { showSpinner, hideSpinner } from '../redux/spinnerDuck'


class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchLocations();
    }
    state = {
        errorMessage: '',
        hasLocation: false,
    }

    onPressMap = () => {
        this.props.navigation.navigate('Locations')
    }

    render() {
        const { locations } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.bannerRow} >
                    <Image source={require('../components/jog-icon.png')} style={styles.image} />
                    <Image source={require('../components/sports-icon.png')} style={styles.image} />
                    <Image source={require('../components/volleyball-icon.png')} style={styles.image} />
                </View>
                <Spacer height={18} />

                {typeof this.props.currentLocation === 'undefined' &&
                    <View style={styles.errorContainer} >
                        <Text style={styles.error}>Locating... Please Wait!</Text>
                    </View>
                }

                {typeof this.props.currentLocation === 'string' &&
                    <View>
                        <Text style={styles.error}>{this.props.currentLocation}</Text>
                    </View>
                }

                <Spacer height={8} />

                <CustomButton
                    disabled={false}
                    onPress={this.onPressMap}
                >
                    MAP
                </CustomButton>
                <ActivityIndicator />
                <Modal
                    visible={this.props.spinner}
                    transparent={true}
                >
                    <Spinner />
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { locations, currentLocation } = state.location;

    return {
        currentLocation,
        locations,
        spinner: state.spinner,
    }
}

export default connect(mapStateToProps, { getCurrentLocation, fetchLocations, hideSpinner, showSpinner })(DashboardScreen);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        alignItems: 'center',
        height: height,
    },
    bannerRow: {
        top: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        maxHeight: 120,
        maxWidth: 120,
    },
    innerContainer: {
        width: '100%',
        maxHeight: 3 / 4 * height,
        borderWidth: 1,
        borderColor: Colors.formTextInputBorderColor,
        backgroundColor: Colors.formTextInputBackgroundColor,
    },
    errorContainer: {
        height: 26,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    error: {
        color: Colors.error,
        fontWeight: '600',
        fontFamily: Fonts.bodyText,
    },
    text: {
        width: '100%',
        height: 40,
        color: Colors.formTextInputColor,
        fontSize: 20,
        paddingLeft: 14,
        fontFamily: Fonts.bodyText,
    },
    earth: {
        top: 10,
    }
});
