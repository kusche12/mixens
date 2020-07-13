import { store } from '../store/store';

const getOrderedTags = () => {
    let allDrinks = store.getState().drinkReducer;
    let data = new Map();
    let favoriteDrinks = 0;

    allDrinks.forEach(drink => {
        if (drink.favorited) {
            favoriteDrinks++;
        };
        drink.tags.forEach(tag => {
            let title = tag.title;
            if (data.has(title)) {
                data.set(title, data.get(title) + 1);
            } else {
                data.set(title, 1);
            }
        });
    });
    data[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    
    let mixArray = [...data].reverse();
    if (favoriteDrinks > 0) {
        mixArray.unshift(['Favorites', favoriteDrinks]);
    }
    return mixArray;
}

export default getOrderedTags;