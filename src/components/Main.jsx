import React,{ useReducer } from 'react'
import Card from './Card';
import AppContext from '../contexts/AppContext';
import Modal from '../components/Modal';
import rootReducer from '../reducers/index';

const initState = { 
    reducerCard :[],
    reducerModal : {show:false},
}

// Display card components
const dispCards = (cards,phase) =>{

    // Filter data by phase
    const filteredCards = cards.filter((value)=> {return value.phase === phase})

    // Generate card componets
    return (
        filteredCards.map(value =>
            <Card key={value.id} id={value.id} dueDate={value.dueDate} priority={value.priority}
                estimation={value.estimation} actualTime={value.actualTime}
                title={value.title} description={value.description}
                status={value.status}
            />
        )
    )
}

const Main = () => {

    const [state, dispacth] = useReducer(rootReducer,initState)

    return (
        <AppContext.Provider value={{stateProvided:state,dispatchProvided:dispacth}}>            
            <div className='main'>
                <p  onClick={() => dispacth({type:'show'})} className='create'>Create</p>

                {/* Open modal window */}
                {state.reducerModal.show &&
                    <Modal />
                }

                <div className='container backlog'>
                    <p className='progress'>Backlog</p>
                    {dispCards(state.reducerCard,'backlog')}
                </div>
                <div className='container scheduled'>
                    <p className='progress'>Scheduled</p>
                    {dispCards(state.reducerCard,'scheduled')}
                </div>
                <div className='container inProgress'>
                    <p className='progress'>In Progress</p>
                    {dispCards(state.reducerCard,'inProgress')}
                </div>
                <div className='container done'>
                    <p className='progress'>Done</p>
                    {dispCards(state.reducerCard,'done')}
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default Main
