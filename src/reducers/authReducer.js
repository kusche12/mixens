const initialState = {
    loggedIn: false,
};
  
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, loggedIn: action.trueFalse }
      default:
        return state;
      
    }
};
  
export default authReducer;