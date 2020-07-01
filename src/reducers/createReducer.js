const initialState = {
            id: '',
            title: '',
            instructions: '',
            ingredients: [
                {
                    id: '1',
                    unit: ' ',
                    amount: ' ',
                    amount2: ' ',
                    ingredient: ' '
                }
            ],
            img: null,
            tags: [
                {
                    id: '1',
                    title: '',
                }, 
            ],
            created: '',   
            favorited: false
};

const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMPORT_MIX':
            return action.payload;
        case 'UPDATE_NAME':
            return { ...state, title: action.payload };
        case 'UPDATE_INSTRUCTIONS':
            return { ...state, instructions: action.payload };
        case 'UPDATE_IMAGE':
            return { ...state, img: action.payload };
        case 'UPDATE_INGREDIENT':
            return { ...state, ingredients: action.payload };
        default:
            return state;
    }
};

export default createReducer;