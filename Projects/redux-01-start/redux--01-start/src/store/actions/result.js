import * as actionsTypes from './actionsType';
export const saveResult = (result) => {
    return {
        type: actionsTypes.STORE_RESULT,
        result: result
    }
};
export const storeResult = (result) => {
    return (dispatch,getState) => {
        setTimeout(() => {
            console.log(getState().counter);
            dispatch(saveResult(result));
        }, 2000);
    }
};
export const deleteResult = (id) => {
    return {
        type: actionsTypes.DELETE_RESULT,
        id: id
    }
};