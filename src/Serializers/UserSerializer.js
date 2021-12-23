import jwtDecode from "jwt-decode"
export default class UserSerializer {
    static serialize() {
        return {
            user: {
                name: user.name,
                email: user.email,
                password: user.password,
                password_confirmation: user.passwordConfirm
            }
        }
    }

    static deserialize(answer) {
        if (parseInt(answer.status / 100) !== 2) return {};

        const { token } = answer.data;
        const data = token ? JSON.parse(jwtDecode(token)) : answer.data;

        const { attributes: { admin, manager, activated, ...user } } = data.data;
        return {
            ...user
        }
    }
}