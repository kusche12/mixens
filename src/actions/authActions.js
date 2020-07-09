export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});
export const logout = () => ({ 
    type: 'LOGOUT' 
});
export const saveName = (name) => ({
    type: 'SAVENAME',
    payload: name
});