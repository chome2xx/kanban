import React,{useContext} from 'react';
import AppContext from '../contexts/AppContext';

const Modal = () => {

    const {stateProvided} = useContext(AppContext);
    const {dispatchProvided} = useContext(AppContext);

    if (stateProvided.reducerModal.show) {
        return (
          <div id="overlay">
            <div id="content">
              <p>{stateProvided.testData}</p>
              <div className='buttons'>
                <p  onClick={() => dispatchProvided({type:"close"})}>Close</p>
                <p  onClick={() => dispatchProvided({type:"a"})}>Add</p>
              </div>
            </div>
          </div >
        )
      } else {
        return null;
    }
}

export default Modal
