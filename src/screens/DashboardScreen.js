import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import * as Location from 'expo-location';
import { connect } from "react-redux";


export class DashboardScreen extends Component {
    state = {
        errorMessage: '',
        location: {},
        hasLocation: false,
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
    }
    
    render() {
        return (
            <View style={styles.screen}>
                <Text>Add my new Locaton</Text>
                {!this.state.hasLocation && <Text>Locating... Please Wait!</Text>}
                {!!this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                <Button title="Push Location" disabled={!this.state.hasLocation} onPress={() => { this.props.navigation.navigate('Locations', this.state) }} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.warn(state)
    return {}
}

export default connect(mapStateToProps)(DashboardScreen)

const styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        color: 'red',
    },
};
