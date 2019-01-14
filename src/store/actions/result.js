import * as actionType from "./actionTypes";

export const saveResult = (result) => {
    return {type: actionType.STORE_RESULT, result};
};

export const storeResult = (result) => {
    // This is util for to get a value that is stored in cache
    return (dispatch, getState) => {
        // const oldCounter = getState().ctr.counter;
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionType.DELETE_RESULT,
        selectedElement: id
    }
};