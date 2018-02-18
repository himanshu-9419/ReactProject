import * as actionTypes from './../actions/actionsType'
const initialstate = {
    results: []
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: {
            return { counter: state.counter, results: state.results.concat({ id: new Date(), value: action.result }) }
        }
        case actionTypes.DELETE_RESULT: {
            const updatedArray = state.results.filter(result => result.id !== action.id);
            return { counter: state.counter, results: updatedArray }
        }
        default: {
            return state;
        }
    }
};

export default reducer;