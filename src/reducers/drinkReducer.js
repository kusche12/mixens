import _ from 'lodash'

const initialState = {
    drinks: [
        {
            id: '1',
            title: 'Strawberry Daquiri',
            instructions: 'In a blender, combine ice, sugar and strawberries. Pour in lime juice, lemon juice, rum and lemon-lime soda. Blend until smooth. Pour into glasses and serve.',
            ingredients: [
                {
                    unit: 'CUP',
                    amount: '1',
                    amount2: ' ',
                    ingredient: 'Ice'
                }, {
                    unit: 'TBSP',
                    amount: '1',
                    amount2: ' ',
                    ingredient: 'Sugar'
                }, {
                    unit: 'OZ',
                    amount: '0',
                    amount2: '1/2',
                    ingredient: 'Frozen Strawberries'
                }, {
                    unit: 'TSP',
                    amount: '1',
                    amount2: ' ',
                    ingredient: 'Lime Juice'
                }, {
                    unit: 'TSP',
                    amount: '1',
                    amount2: ' ',
                    ingredient: 'Lemon Juice'
                }, {
                    unit: 'TBSP',
                    amount: '1',
                    amount2: '1/2',
                    ingredient: 'White Rum'
                },
            ],
            img: 'https://images.unsplash.com/photo-1468465236047-6aac20937e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
            tags: ['Summer', 'Fruity', 'Fresh'],
            created: 'May 20th, 2020',   
            favorited: true   
        }
    ]
};

const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGE_UPLOAD':
            return { ...state, img: action.payload }
        default:
            return state;
    }
};

export default drinkReducer;