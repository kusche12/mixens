import { store } from '../store/store';

const getTaggedMixes = (queryTag) => {
    let data = [];
    const allDrinks = store.getState().drinkReducer;
    if (queryTag === 'Favorites') {
        allDrinks.forEach(drink => {
            if (drink.favorited) {
                data.push(drink);
            }
        });
    } else {
        allDrinks.forEach(drink => {
            drink.tags.forEach(tag => {
                if (tag.title === queryTag) {
                    data.push(drink);
                }
            });
        });
    }
    return data;
}

export default getTaggedMixes;