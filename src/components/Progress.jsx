import React from 'react'

const Progress = () => {
    return (
        <div>
            <div class='progress'>
                <div className='container backlog'>
                    <p className='label'>Backlog</p>
                </div>
                <div className='container scheduled'>
                    <p className='label'>Scheduled</p>
                </div>
                <div className='container inProgress'>
                    <p className='label'>In Progress</p>
                </div>
                <div className='container done'>
                    <p className='label'>Done</p>
                </div>
            </div>
        </div>
    )
}

export default Progress
