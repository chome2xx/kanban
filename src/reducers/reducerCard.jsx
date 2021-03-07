const reducerCard = (state=[],action) => {
    let data = [];
    switch (action.type) {
        case 'add':
            data = state.slice();
            data.push(action.data);
            return data
        case 'update':
            data = state.filter((value)=> {
                return value.id !== action.data.id
            })
            data.push(action.data);
            return data
        case 'delete':
            data = state.filter((value)=> {
                return value.id !== action.data.id
            })
            return data
        default: return state        
    }
}

export default reducerCard