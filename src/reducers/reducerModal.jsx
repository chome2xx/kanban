const reducerModal = (state=[],action) => {
    switch (action.type) {
        case 'show':
            return {...state,show:true}
        case 'hide':
            return {...state,show:false}
        default: return state        
    }
}

export default reducerModal
