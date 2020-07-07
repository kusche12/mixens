// Fill this with functions that have to do with authentication
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});
export const logout = () => ({ type: 'LOGOUT' });