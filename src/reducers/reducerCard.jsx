const reducerCard = (state=[],action) => {
    let data = [];
    switch (action.type) {
        case 'add':
            data = state.slice();
            data.push(action.data);
            return data
        case 'b':
            return state
        default: return state        
    }
}

export default reducerCard