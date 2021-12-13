import api from '../api/user'
import LocationSerializer from '../Serializers/LocationSerializer';
import LocationProvider from '../utils/LocationProvider';

export const LOCATIONS_FETCHED = "LOCATIONS_FETCHED";
export const LOCATIONS_FETCHED_FAILED = "LOCATIONS_FETCHED_FAILED";
export const LOCATION_CREATED = "LOCATION_CREATED";
export const CURRENT_LOCATION_SENT = "CURRENT_LOCATION_SENT";
export const CURRENT_LOCATION = "CURRENT_LOCATION";
export const LOCATION_DELETED = "LOCATION_DELETED";

const currentLocationSent = () => ({
    type: CURRENT_LOCATION_SENT
});

const located = (data) => ({
    type: CURRENT_LOCATION,
    data
});

const locationsFetched = (data) => ({
    type: LOCATIONS_FETCHED,
    data
});

const locationsFetchedFailed = (data) => ({
    type: LOCATIONS_FETCHED_FAILED,
    data
});

const locationDeleted = (data) => ({
    type: LOCATION_DELETED,
    data
})

export const getCurrentLocation = () => (dispatch) => {
    LocationProvider.getLocation(dispatch, located);
}

export const sendCurrentLocation = (location) => (dispatch) => {
    // show spinner 
    api.locations.pushLocation(location)
        .then(dispatch(currentLocationSent()));
    // hide spinner
}

export const fetchLocations = () => (dispatch) => {
    // show spinner
    api.locations.fetchMyLocations()
        .then((locations) => {
            if (Array.isArray(locations)) {
                dispatch(locationsFetched(LocationSerializer.deserialize(locations)))
            } else {
                dispatch(locationsFetchedFailed(locations.message))
            }
        })
        .catch(res => dispatch(locationsFetchedFailed(res)));
    // hide spinner
}

export const deleteLocation = (location) => (dispatch) =>
    api.locations.deleteLocation(location)
        .then(dispatch(locationDeleted(location)));

const location = (state = {}, action = {}) => {
    switch (action.type) {
        case CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: { ...action.data },
                // locations: state.locations?.concat(action.data)
            }
        case LOCATION_DELETED:
            return {
                ...state,
                locations: state.locations?.filter(({ key }) => action.data.key == key)
            }
        case LOCATIONS_FETCHED:
            return {
                ...state,
                locations: action.data
            }
        default:
            return state;
    }
}

export default location;



