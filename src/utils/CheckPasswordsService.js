const minPasswordLength = 6;

// Returns false if all good, otherwise an error string
const checkPasswords = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
        return 'Passwords do not match';
    }

    if (password?.length < minPasswordLength) {
        return `Password must be ${minPasswordLength} digits or longer`;
    }

    return false;
};

export default checkPasswords;
