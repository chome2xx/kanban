import React from 'react'

const Card = (props) => {
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
                <a href='#' class='edit'>Edit</a>
            </div>

        </div>
    )
}

export default Card
