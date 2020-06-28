export const updateMix = (mix) => {
    return { type: 'UPDATE_MIX', payload: mix }
};

export const deleteMix = (mix) => {
    return { type: 'DELETE_MIX', payload: mix }
};

export const reducerTest = () => {
    return { type: 'TEST' }
};