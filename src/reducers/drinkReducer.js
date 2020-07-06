import _ from 'lodash';
const initialState = [];
const initialStateDEVBUILD = [
    {
        id: '0',
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
        img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/17/1461680168-shot-1-207.jpg',
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
    },
    {
        id: '1',
        title: 'Mojito',
        instructions: 'Place mint leaves and 1 lime wedge into a sturdy glass. Use a muddler to crush the mint and lime to release the mint oils and lime juice. Add 2 more lime wedges and the sugar, and muddle again to release the lime juice. Do not strain the mixture. Fill the glass almost to the top with ice. Pour the rum over the ice, and fill the glass with carbonated water. Stir, taste, and add more sugar if desired. Garnish with the remaining lime wedge.',
        ingredients: [
            {
                id: '1',
                unit: 'PIECES',
                amount: '10',
                amount2: ' ',
                ingredient: 'Fresh Mint Leaves'
            }, {
                id: '2',
                unit: 'WEDGES',
                amount: '4',
                amount2: ' ',
                ingredient: 'Limes'
            }, {
                id: '3',
                unit: 'TBSP',
                amount: '2',
                amount2: ' ',
                ingredient: 'White Sugar'
            }, {
                id: '4',
                unit: 'CUP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Ice Cubes'
            }, {
                id: '5',
                unit: 'OZ',
                amount: '1',
                amount2: '1/2',
                ingredient: 'White Rum'
            }, {
                id: '6',
                unit: 'CUP',
                amount: '0',
                amount2: '1/2',
                ingredient: 'Club Soda'
            },
        ],
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1133511.jpg&w=596&h=399&c=sc&poi=face&q=85',
        tags: [
            {
                id: '1',
                title: 'Summer',
            }, 
            {
                id: '2',
                title: 'Mint'
            }, 
            { 
                id: '3',
                title: 'Fresh'
            }
        ],
        created: 'May 30th, 2020',   
        favorited: false   
    },
    {
        id: '2',
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
    },
    {
        id: '3',
        title: 'Mojito',
        instructions: 'Place mint leaves and 1 lime wedge into a sturdy glass. Use a muddler to crush the mint and lime to release the mint oils and lime juice. Add 2 more lime wedges and the sugar, and muddle again to release the lime juice. Do not strain the mixture. Fill the glass almost to the top with ice. Pour the rum over the ice, and fill the glass with carbonated water. Stir, taste, and add more sugar if desired. Garnish with the remaining lime wedge.',
        ingredients: [
            {
                id: '1',
                unit: 'PIECES',
                amount: '10',
                amount2: ' ',
                ingredient: 'Fresh Mint Leaves'
            }, {
                id: '2',
                unit: 'WEDGES',
                amount: '4',
                amount2: ' ',
                ingredient: 'Limes'
            }, {
                id: '3',
                unit: 'TBSP',
                amount: '2',
                amount2: ' ',
                ingredient: 'White Sugar'
            }, {
                id: '4',
                unit: 'CUP',
                amount: '1',
                amount2: ' ',
                ingredient: 'Ice Cubes'
            }, {
                id: '5',
                unit: 'OZ',
                amount: '1',
                amount2: '1/2',
                ingredient: 'White Rum'
            }, {
                id: '6',
                unit: 'CUP',
                amount: '0',
                amount2: '1/2',
                ingredient: 'Club Soda'
            },
        ],
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1133511.jpg&w=596&h=399&c=sc&poi=face&q=85',
        tags: [
            {
                id: '1',
                title: 'Summer',
            }, 
            {
                id: '2',
                title: 'Mint'
            }, 
            { 
                id: '3',
                title: 'Fresh'
            }
        ],
        created: 'May 30th, 2020',   
        favorited: false   
    }
];

const newDrink = {
    id: '1',
    title: 'Mojito',
    instructions: 'Place mint leaves and 1 lime wedge into a sturdy glass. Use a muddler to crush the mint and lime to release the mint oils and lime juice. Add 2 more lime wedges and the sugar, and muddle again to release the lime juice. Do not strain the mixture. Fill the glass almost to the top with ice. Pour the rum over the ice, and fill the glass with carbonated water. Stir, taste, and add more sugar if desired. Garnish with the remaining lime wedge.',
    ingredients: [
        {
            id: '1',
            unit: 'PIECES',
            amount: '10',
            amount2: ' ',
            ingredient: 'Fresh Mint Leaves'
        }, {
            id: '2',
            unit: 'WEDGES',
            amount: '4',
            amount2: ' ',
            ingredient: 'Limes'
        }, {
            id: '3',
            unit: 'TBSP',
            amount: '2',
            amount2: ' ',
            ingredient: 'White Sugar'
        }, {
            id: '4',
            unit: 'CUP',
            amount: '1',
            amount2: ' ',
            ingredient: 'Ice Cubes'
        }, {
            id: '5',
            unit: 'OZ',
            amount: '1',
            amount2: '1/2',
            ingredient: 'White Rum'
        }, {
            id: '6',
            unit: 'CUP',
            amount: '0',
            amount2: '1/2',
            ingredient: 'Club Soda'
        },
    ],
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1133511.jpg&w=596&h=399&c=sc&poi=face&q=85',
    tags: [
        {
            id: '1',
            title: 'Summer',
        }, 
        {
            id: '2',
            title: 'Mint'
        }, 
        { 
            id: '3',
            title: 'Fresh'
        }
    ],
    created: 'May 30th, 2020',   
    favorited: false   
}

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
            createState.push(action.payload);
            return createState
        default:
            return state;
    }
};

export default drinkReducer;