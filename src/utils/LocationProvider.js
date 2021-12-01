import * as Location from 'expo-location';

export default class LocationProvider {
    static getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        return (status !== 'granted') ? "Not Granted!" : await Location.getCurrentPositionAsync();
    }
}