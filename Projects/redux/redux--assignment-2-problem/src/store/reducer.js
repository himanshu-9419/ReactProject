import actionStore from './action';
const initialState={persons:[]};
const reducer=(state=initialState,action)=>{
    console.log(action.type,action.value);
    switch (action.type) {
        case actionStore.AddPerson:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return { persons:[...state.persons,newPerson]}
        case actionStore.DeletePerson:
            return { persons: state.persons.filter(person => person.id !== action.value) }
        default:
            return { persons: [...state.persons] }
    }
}

export default reducer;