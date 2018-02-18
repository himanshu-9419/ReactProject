//as we split reducer in reducer folder

// import * as actionTypes from './actions'
// const initialstate={
//     counter:0,
//     results:[]
// }

// const reducer=(state=initialstate,action)=>{
//     switch(action.type){
//         case actionTypes.INCREMENT:{
//             return {counter:state.counter+1,results:[...state.results]}
//         }
//         case actionTypes.DECREMENT: {
//                 return { counter: state.counter - 1, results: [...state.results]}
//         }
//         case actionTypes.ADD: {
//                 return { counter: state.counter + action.value, results: [...state.results] }
//         }
//         case actionTypes.SUBTRACT: {
//                 return { counter: state.counter - action.value, results: [...state.results]}
//         }
//         case actionTypes.STORE_RESULT: {
//             return { counter: state.counter, results: state.results.concat({ id: new Date(), value: state.counter }) }
//         }
//         case actionTypes.DELETE_RESULT: {
//             const updatedArray=state.results.filter(result=>result.id!==action.id);
//             return { counter: state.counter, results: updatedArray }
//         }
//         default:{
//             return state;
//         }
// }
// };

// export default reducer;