import api from '../api/user'

export const LOCATIONS_FETCHED = "LOCATIONS_FETCHED";
export const LOCATION_CREATED = "LOCATION_CREATED";
export const CURRENT_LOCATION_FETCHED = "CURRENT_LOCATION_FETCHED";
export const LOCATION_DELETED = "LOCATION_DELETED";

const currentLocationFetched = (data) => ({
    type: CURRENT_LOCATION_FETCHED,
    data
});

const locationsFetched = (data) => ({
    type: LOCATIONS_FETCHED,
    data
});

const locationDeleted = (data) => ({
    type: LOCATION_DELETED,
    data
})

export const fetchCurrentLocation = (location) => (dispatch) =>
    api.locations.pushLocation(location)
        .then(dispatch(currentLocationFetched(location)));

export const fetchLocations = () => (dispatch) =>
    api.locations.fetchMyLocations()
        .then((locations) => dispatch(locationsFetched(locations)));

export const deleteLocation = (location) => (dispatch) =>
    api.locations.deleteLocation(location)
        .then(dispatch(locationDeleted(location)));

export default location = (state = {}, action = {}) => {
    switch (action.type) {
        case CURRENT_LOCATION_FETCHED:
            return {
                ...state,
                currentLocation: action.data,
                locations: state.locations?.concat(action.data)
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


