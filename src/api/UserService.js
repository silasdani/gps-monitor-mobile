import setHeader from "../utils/setAuthorizationHeader";
import ApiService from "./ApiService";

class UserService extends ApiService {
    constructor() {
        super();
        this.url = '/users';
    }

    login(credentials) {
        return super.post("/login", credentials, ((res) => {
            setHeader(res.data.data.attributes.remember_digest)
            return res.data.data.attributes;
        }))
    }

    logout() {
        return super.delete("/logout", (() => setHeader()))
    }

    signup(user) {
        return super.post("/users", { user }, ((res) => (res)))
    }

    confirm(token) {
        return super.get("/account_activations/" + token, ((res) => res.data.data.attributes))
    }

    resetPasswordRequest(email) {
        return super.post("/password_resets", { email }, ((res) => res))
    }

    validateToken(token) {
        return super.post("/validate_token", { token }, ((res) => res))
    }

    resetPassword(data) {
        return super.post("/password_resets", { data }, ((res) => res))
    }
}

export default UserService;