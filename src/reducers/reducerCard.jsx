const testData = 
{
    id : '01',
    title : 'Added Data',
    description : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    dueDate :'2021/3/1',
    priority : 'High',
    estimation: '1.0',
    actualTime: '1.0',
    phase : 'backlog',
    status: 'green'
} 

const reducerCard = (state=[],action) => {
    let data = [];
    switch (action.type) {
        case 'a':
            data = state.slice();
            data.push(testData);
            return data
        case 'b':
            return state
        default: return state        
    }
}

export default reducerCard