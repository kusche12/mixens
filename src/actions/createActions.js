export const importMix = (mix) => {
    return { type: 'IMPORT_MIX', payload: mix }
};
export const updateName = (text) => {
    return { type: 'UPDATE_NAME', payload: text }
};
export const updateInstructions = (text) => {
    return { type: 'UPDATE_INSTRUCTIONS', payload: text }
};
export const updateImage = (image) => {
    return { type: 'UPDATE_IMAGE', payload: image };
};
export const updateIngredient = (ingredients) => {
    return { type: 'UPDATE_INGREDIENT', payload: ingredients };
};