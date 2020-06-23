const initialState = {
    drinks: [
        {
            title: 'Strawberry Daquiri',
            instructions: 'In a blender, combine ice, sugar and strawberries. Pour in lime juice, lemon juice, rum and lemon-lime soda. Blend until smooth. Pour into glasses and serve.',
            ingredients: [
                {
                    unit: 'cup',
                    amount: 1,
                    ingredient: 'Ice'
                }, {
                    unit: 'tbsp',
                    amount: 1,
                    ingredient: 'Sugar'
                }, {
                    unit: 'oz',
                    amount: .5,
                    ingredient: 'Frozen Strawberries'
                }, {
                    unit: 'tsp',
                    amount: 1,
                    ingredient: 'Lime Juice'
                }, {
                    unit: 'tsp',
                    amount: 1,
                    ingredient: 'Lemon Juice'
                }, {
                    unit: 'tbsp',
                    amount: 1.5,
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
        default:
            return state;
    }
};

export default drinkReducer;