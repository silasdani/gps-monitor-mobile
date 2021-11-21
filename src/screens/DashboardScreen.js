import React, { Component } from 'react'
import { Button, Text, ScrollView, View } from 'react-native'
import * as Location from 'expo-location';
import { connect } from "react-redux";
import api from '../api/user';
import LocationSerializer from '../utils/LocationSerializer';


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

    onPushLocation = () => {
        const location = LocationSerializer.serialize(this.state.location);
        api.user.addLocation(location).then((ans) => {
            this.props.navigation.navigate('Locations', this.state)
        }).catch(res => res)
    }

    onRefreshLocations = () => {
        api.locations.fetchMyLocations().then(data => {
            this.setState({ ...this.state, locations: data })
        })
    }

    render() {
        const { locations } = this.state;
        return (
            <View style={styles.screen}>
                <Button title="REFRESH" onPress={this.onRefreshLocations} />
                <ScrollView style={{ height: 400 }}>
                    {locations?.map(location => {
                        return (<Text>{location?.attributes?.location_title}</Text>)
                    })}
                </ScrollView>
                <Text>Add my new Locaton</Text>
                {!this.state.hasLocation && <Text>Locating... Please Wait!</Text>}
                {!!this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                <Button title="Push Location" disabled={!this.state.hasLocation} onPress={this.onPushLocation} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(DashboardScreen)

const styles = {
    screen: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        color: 'red',
    },
};
