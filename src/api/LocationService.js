import ApiService from "./ApiService";
import LocationSerializer from '../Serializers/LocationSerializer';

class LocationService extends ApiService {
    constructor() {
        super();
        this.url = '/location';
    }

    fetchMyLocations() {
        return super.get("/locations/", ((res) => res.data.data))
    }

    pushLocation(location) {
        const serializedLocation = LocationSerializer.serialize(location?.coords);
        return super.post("/location", serializedLocation, ((location) => location.data))
    }
}

export default LocationService;
