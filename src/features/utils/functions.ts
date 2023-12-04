export const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
};

export const validatePassword = (input: string) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/;
    return passwordRegex.test(input);
};
