import axios from "axios";

export default {
    // Account actions
    user: {
        login: (credentials) =>
            axios
                .post("/login", { email: credentials.email, password: credentials.password })
                .then((res) => res.data.data.attributes),

        logout: () =>
            axios
                .delete("/logout"),

        signup: (user) =>
            axios
                .post("/users", { user })
                .then((res) => res.data.data.attributes),

        confirm: (token) =>
            axios
                .get("/account_activations/" + token)
                .then((res) => res.data.data.attributes),

        resetPasswordRequest: (email) =>
            axios
                .post("/password_resets", { email })
                .then((res) => res),

        validateToken: (token) =>
            axios
                .post("/validate_token", { token }),

        resetPassword: (data) =>
            axios
                .post("/password_resets", { data })
                .then((res) => console.warn(res)),
    },

    // Tracks CRUD
    tracks: {
        fetchMyTracks: () =>
            axios
                .get("/tracks/my")
                .then((res) => res.data.data),

        create: (track) =>
            axios
                .post("/tracks", { track })
                .then((res) => res.data),

        update: (track, id) =>
            axios
                .patch("/tracks/" + id, { track })
                .then((res) => res.data),

        weekly_report: () =>
            axios
                .get("/tracks/weekly_report")
                .then((res) => res.data),

        getData: (id) =>
            axios
                .get("/tracks/" + id)
                .then((res) => res.data.data.attributes),

        delete: (id) =>
            axios
                .delete("/tracks/" + id)
                .then(() => "Success"),
    }
}
