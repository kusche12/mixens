const initialState = {
    loggedIn: false,
    user: null,
    name: null
};
  
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, loggedIn: true, user: action.payload };
      case 'LOGOUT': 
        return {...state, loggedIn: false, user: null };
      case 'SAVENAME':
        return {...state, name: action.payload};
      default:
        return state;
    }
};
  
export default authReducer;