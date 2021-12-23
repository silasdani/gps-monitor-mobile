import React from 'react'
import { Dimensions, Text, Modal, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import { connect } from 'react-redux';
import { getCurrentLocation, fetchLocations } from '../redux/locationDuck'
import Spinner from '../components/Spinner';
import { showSpinner, hideSpinner } from '../redux/spinnerDuck'


class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        if (!props.session.signedIn) props.navigation.navigate('Login')
        props.fetchLocations();
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
                <View style={styles.group}>
                    <View style={styles.bannerRow} >
                        <Image source={require('../components/jog-icon.png')} style={styles.image} />
                        <Image source={require('../components/sports-icon.png')} style={styles.image} />
                        <Image source={require('../components/volleyball-icon.png')} style={styles.image} />
                    </View>
                    <Spacer height={10} />
                    <CustomButton
                        disabled={false}
                        onPress={this.onPressMap}
                    >
                        TO THE MAP
                    </CustomButton>
                </View>
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
        session: state.session,
    }
}

export default connect(mapStateToProps, { getCurrentLocation, fetchLocations, hideSpinner, showSpinner })(DashboardScreen);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: Colors.sceneBackgroundColor,
        display: 'flex',
        justifyContent: 'flex-end',
        height: height - 100
    },
    bannerRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    group: {
        height: 150,
        bottom: 70
    },
    image: {
        tintColor: 'black',
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
