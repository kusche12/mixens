import { store } from '../store/store';

let data = new Map();
let allDrinks = store.getState().drinkReducer;

allDrinks.forEach(drink => {
    if (drink.favorited) {
        if (data.has('Favorites')) {
            data.set('Favorites', data.get('Favorites') + 1);
        } else {
            data.set('Favorites', 1);
        }
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

console.log([...data]);
export default [...data].reverse();