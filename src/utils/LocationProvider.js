import * as Location from 'expo-location';

export default class LocationProvider {
    static getLocation = async (dispatch, located) => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        (status !== 'granted') ? dispatch(located("Not Granted!")) : dispatch(located(await Location.getCurrentPositionAsync()));
    }
}