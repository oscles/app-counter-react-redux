const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 5
};

// Reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    } else if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(reducer);
console.log(store.getState());

// Subscriptions
store.subscribe(() => {
    console.log('[Subscribe]', store.getState());
});

// Dispatching Actions
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
store.dispatch({type: 'DEC_COUNTER'});
console.log(store.getState());
