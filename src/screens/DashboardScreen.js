import React, { Component } from 'react'
import { Dimensions, Text, ScrollView, View, StyleSheet } from 'react-native'
import * as Location from 'expo-location';
import api from '../api/user';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import Fonts from '../utils/Fonts';

export class DashboardScreen extends Component {
    state = {
        errorMessage: '',
        location: {},
        hasLocation: false,
        locations: [],
    }

    _getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            let errorMessage = "Not Granted!";
            this.setState({ ...this.state, errorMessage })
            return;
        }
        const location = await Location.getCurrentPositionAsync();
        this.setState({ location, hasLocation: true })
    }

    componentWillMount() {
        this._getLocation();
        const locations = this.props.route.params?.included;
        this.setState({ ...this.state, locations })
    }

    onRefreshLocations = () => {
        api.locations.fetchMyLocations().then(data => {
            this.setState({ ...this.state, locations: data })
        })
        this.props.navigation.navigate('Locations', this.state)
    }

    render() {
        const { locations } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.innerContainer}>
                    {locations?.map(location => {
                        const { country, locality, facility_name } = location?.attributes;
                        return (<Text style={styles.text}> - {[country, locality, facility_name].join(', ')}</Text>)
                    })}
                </ScrollView>

                <Spacer height={18} />

                {!this.state.hasLocation &&
                    <View style={styles.errorContainer} >
                        <Text style={styles.error}>Locating... Please Wait!</Text>
                    </View>
                }

                {!!this.state.errorMessage &&
                    <View>
                        <Text style={styles.error}>{this.state.errorMessage}</Text>
                    </View>
                }

                <Spacer height={8} />

                <CustomButton
                    disabled={false}
                    onPress={this.onRefreshLocations}
                >
                    Refresh
                </CustomButton>
            </View>
        )
    }
}

export default DashboardScreen;

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
        maxHeight: 3/4 * height ,
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
