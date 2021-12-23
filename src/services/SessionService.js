import ApiService from "../api/ApiService";

class SessionService extends ApiService {
    constructor() {
        super();
        this.url = '/session';
    }

    login(credentials) {
        return super.post("/login", credentials, (answer => {
            return answer
        }))
    }

    logout() {
        return super.delete("/logout", (() => setHeader()))
    }
}

export default SessionService;