import setHeader from "../utils/setAuthorizationHeader";
import ApiService from "../api/ApiService";

class SessionService extends ApiService {
    constructor() {
        super();
        this.url = '/session';
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
}

export default SessionService;