import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.selectedElement);
    return updateObject(state, {results: updatedArray});
};

const storeResult = (state, action) => {
    return updateObject(state, {
        results: state.results.concat({
            id: new Date(),
            value: action.result
        })
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // refactoring reducer, this implementation is optional, but it's better
            /*return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            };*/
            return storeResult(state, action);
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;