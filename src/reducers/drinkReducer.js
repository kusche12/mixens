import _ from 'lodash';

const initialState = [];

const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MIX':
            let updateState = [...state];
            let index = _.findIndex(updateState, { id: action.payload.id });
            updateState[index] = action.payload;
            return updateState;
        case 'DELETE_MIX':
            let deleteState = [...state];
            let id = _.findIndex(deleteState, { id: action.payload.id });
            deleteState.splice(id, 1);
            return deleteState;
        case 'CREATE_MIX': 
            let createState = [...state];
            createState.push(action.payload);
            return createState
        default:
            return state;
    }
};

export default drinkReducer;
