export const passwordValidity = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    let resoult = regex.test(password);
    return resoult;
}
export const passwordsMatched = (password, confirmPassword) => {
    if (password === confirmPassword) return true;
    return false;
}