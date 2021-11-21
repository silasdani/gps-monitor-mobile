export default class LocationSerializer {
    static serialize(user) {

        return {
            user: {
                name: user.name,
                email: user.email,
                password: user.password,
                password_confirmation: user.passwordConfirm
            }
        }
    }
}