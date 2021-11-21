import axios from "axios";
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
                .then((res) => res.data.data.attributes),

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

    // Tracks CRUD
    tracks: {
        fetchMyTracks: () =>
            axios
                .get(ENV + "/tracks/my")
                .then((res) => res.data.data),

        create: (track) =>
            axios
                .post(ENV + "/tracks", { track })
                .then((res) => res.data),

        update: (track, id) =>
            axios
                .patch(ENV + "/tracks/" + id, { track })
                .then((res) => res.data),

        weekly_report: () =>
            axios
                .get(ENV + "/tracks/weekly_report")
                .then((res) => res.data),

        getData: (id) =>
            axios
                .get(ENV + "/tracks/" + id)
                .then((res) => res.data.data.attributes),

        delete: (id) =>
            axios
                .delete(ENV + "/tracks/" + id)
                .then(() => "Success"),
    }
}
