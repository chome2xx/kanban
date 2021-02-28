import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <div class='main'>
            <p className='create'>Create</p>
            <div className='container backlog'>
                <p className='progress'>Backlog</p>
                <Card/>
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/> */}
           </div>
            <div className='container scheduled'>
                <p className='progress'>Scheduled</p>
                <Card/>
            </div>
            <div className='container inProgress'>
                <p className='progress'>In Progress</p>
                <Card/>
            </div>
            <div className='container done'>
                <p className='progress'>Done</p>
                <Card/>
            </div>
        </div>
    )
}

export default Main
