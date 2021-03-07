import React,{useContext} from 'react'
import AppContext from '../contexts/AppContext';

const Card = (props) => {

    // const {stateProvided} = useContext(AppContext);
    const {dispatchProvided} = useContext(AppContext);

    return (
        <div className='card'>
            <div className={props.status}></div>
            <p className="title">{props.title}</p>
            <p className='description'>{props.description}</p>
            <div>
                <ul className='fields'>
                    <li>Due Date: {props.dueDate}</li>
                    <li>Estimation: {props.estimation} h</li>
                    <li>Priority: {props.priority}</li>
                    <li>Actual Time: {props.actualTime} h</li>
                </ul>
            </div>
            <div className='clear'>
                <p id = {props.id} onClick={() => [dispatchProvided({type:'edit',id:props.id})]} href='#' className='edit'>Edit</p>
            </div>

        </div>
    )
}

export default Card
