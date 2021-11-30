import axios from "axios";
import LocationSerializer from "../Serializers/LocationSerializer";
import setHeader from "../utils/setAuthorizationHeader";

const ENV = "https://staging-gps-monitor.herokuapp.com/";
// const ENV = "http://localhost:3000/";

export default {
    // Account actions
    user: {
        addLocation: (location) =>
            axios
                .post(ENV + "/location", location)
                .then((answer) => answer),

        login: (credentials) =>
            axios
                .post(ENV + "/login", credentials)
                .then((res) => {
                    setHeader(res.data.data.attributes.remember_digest)
                    return res.data;
                })
                .catch((r) => r),

        logout: () =>
            axios
                .delete(ENV + "/logout").then(() => {
                    setHeader()
                }),

        signup: (user) =>
            axios
                .post(ENV + "/users", { user })
                .then((res) => console.warn(res))
                .catch((res) => console.warn(res)),

        confirm: (token) =>
            axios
                .get(ENV + "/account_activations/" + token)
                .then((res) => res.data.data.attributes),

        resetPasswordRequest: (email) =>
            axios
                .post(ENV + "/password_resets", { email })
                .then((res) => res),

        validateToken: (token) =>
            axios
                .post(ENV + "/validate_token", { token }),

        resetPassword: (data) =>
            axios
                .post(ENV + "/password_resets", { data })
                .then((res) => res),
    },

    // Locations CRUD
    locations: {
        fetchMyLocations: () =>
            axios
                .get(ENV + "/locations/")
                .then((res) => res.data.data),

        pushLocation: (location) => {
            const serializedLocation = LocationSerializer.serialize(location);
            axios
                .post(ENV + "/add_location", serializedLocation)
                .then((location) => location.data)
        }
    },
}