import _ from 'lodash';


const initialState = [];
const initialStateDEVBUILD = [
    {
        id: '1',
        title: 'Strawberry Daquiri',
        instructions: 'In a blender, combine ice, sugar and strawberries. Pour in lime juice, lemon juice, rum and lemon-lime soda. Blend until smooth. Pour into glasses and serve.',
        ingredients: [
            {
                id: '1',
                unit: 'CUP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Ice'
            }, {
                id: '2',
                unit: 'TBSP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Sugar'
            }, {
                id: '3',
                unit: 'OZ',
                amount: '0',
                amount2: '1/2',
                ingredient: 'Frozen Strawberries'
            }, {
                id: '4',
                unit: 'TSP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Lime Juice'
            }, {
                id: '5',
                unit: 'TSP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Lemon Juice'
            }, {
                id: '6',
                unit: 'TBSP',
                amount: '1',
                amount2: '1/2',
                ingredient: 'White Rum'
            },
        ],
        img: 'https://images.unsplash.com/photo-1468465236047-6aac20937e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        tags: [
            {
                id: '1',
                title: 'Summer',
            }, 
            {
                id: '2',
                title: 'Fruity'
            }, 
            { 
                id: '3',
                title: 'Fresh'
            }
        ],
        created: 'May 20th, 2020',   
        favorited: true   
    }
];

const newDrink = {
    id: '2',
    title: 'BLUEBERRY PIE',
    instructions: 'BLUEBERRY PIE BLUEBERRY PIE BLUEBERRY PIEBLUEBERRY PIEBLUEBERRY PIEBLUEBERRY PIE BLUEBERRY PIE',
    ingredients: [
        {
            id: '1',
            unit: 'CUP',
            amount: '1',
            amount2: ' ',
            ingredient: 'Ice'
        }, {
            id: '2',
            unit: 'TBSP',
            amount: '1',
            amount2: ' ',
            ingredient: 'Sugar'
        }, {
            id: '3',
            unit: 'OZ',
            amount: '0',
            amount2: '1/2',
            ingredient: 'Frozen Strawberries'
        }, {
            id: '4',
            unit: 'TSP',
            amount: '1',
            amount2: ' ',
            ingredient: 'Lime Juice'
        }, {
            id: '5',
            unit: 'TSP',
            amount: '1',
            amount2: ' ',
            ingredient: 'Lemon Juice'
        }, {
            id: '6',
            unit: 'TBSP',
            amount: '1',
            amount2: '1/2',
            ingredient: 'White Rum'
        },
    ],
    img: 'https://images.unsplash.com/photo-1468465236047-6aac20937e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    tags: [
        {
            id: '1',
            title: 'Summer',
        }, 
        {
            id: '2',
            title: 'Fruity'
        }, 
        { 
            id: '3',
            title: 'Fresh'
        }
    ],
    created: 'May 20th, 2020',   
    favorited: true   
};

const drinkReducer = (state = initialStateDEVBUILD, action) => {
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
            state.append(action.payload);
            return createState
        default:
            return state;
    }
};

export default drinkReducer;