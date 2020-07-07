const initialState = {
    loggedIn: false,
    user: null
};
  
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        console.log('USER AUTHENTICARTED IN REDUX')
        return {...state, loggedIn: true, user: action.payload };
      case 'LOGOUT': 
        console.log('USER LOGOUT FROM REDUX');
        return {...state, loggedIn: false, user: null }
      default:
        return state;
    }
};
  
export default authReducer;