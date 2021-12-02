import React, { Component } from 'react'
import { Dimensions, Text, ScrollView, View, StyleSheet } from 'react-native'
import api from '../api/user';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';
import { connect } from 'react-redux';
import { getCurrentLocation, fetchLocations } from '../redux/locationDuck'

class DashboardScreen extends Component {
    state = {
        errorMessage: '',
        hasLocation: false,
    }

    start = () => {
        this.props.getCurrentLocation();
        this.props.fetchLocations();
    }

    onPressMap = () => {
        this.props.navigation.navigate('Locations', this.props.locations)
    }

    render() {
        const { locations } = this.props;
        return (
            <View style={styles.container}>
                {/* <ScrollView style={styles.innerContainer}>
                    {locations?.map(location => {
                        const { country, locality, facility_name } = location?.attributes;
                        return (<Text style={styles.text}> - {[country, locality, facility_name].join(', ')}</Text>)
                    })}
                </ScrollView> */}

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
                    onPress={this.start}
                >
                    START
                </CustomButton>
                <CustomButton
                    disabled={false}
                    onPress={this.onPressMap}
                >
                    MAP
                </CustomButton>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { locations, currentLocation } = state.location;

    return {
        currentLocation,
        locations
    }
}

export default connect(mapStateToProps, { getCurrentLocation, fetchLocations })(DashboardScreen);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingLeft: Constants.sideMargin,
        paddingRight: Constants.sideMargin,
        backgroundColor: Colors.sceneBackgroundColor,
        height: height,
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
});
