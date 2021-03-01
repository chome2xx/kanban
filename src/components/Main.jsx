import React,{ useState } from 'react'
import Card from './Card'

const testData = {
    title : 'Thumbnail label',
    description : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
    dueDate :'2021/3/1',
    priority : 'High',
    estimation: '1.0',
    actualTime: '1.0',
    phase : 'backlog',
    status: ''
}

const Main = () => {

    const [object, setObject] = useState([]);

    const createData = () =>{
        setObject([...object,testData]);
    }

    const dispCards = (phase) =>{

        // Filter data by phase
        const cards = object.filter((value)=> {return value.phase===phase})

        // Generate card componets
        return (
            cards.map(value =>
                <Card dueDate={value.dueDate} priority={value.priority}
                    estimation={value.estimation} actualTime={value.actualTime}
                    title={value.title} description={value.description}
                    status={value.status}
                />
            )
        )
    }

    return (
        <div class='main'>
            <p onClick={createData} className='create'>Create</p>
            <div className='container backlog'>
                <p className='progress'>Backlog</p>
                {dispCards('backlog')}
           </div>
            <div className='container scheduled'>
                <p className='progress'>Scheduled</p>
                {dispCards('scheduled')}
            </div>
            <div className='container inProgress'>
                <p className='progress'>In Progress</p>
                {dispCards('inProgress')}
            </div>
            <div className='container done'>
                <p className='progress'>Done</p>
                {dispCards('done')}
            </div>
        </div>
    )
}

export default Main
