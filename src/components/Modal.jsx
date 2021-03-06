import React,{useContext,useState,useEffect} from 'react';
import AppContext from '../contexts/AppContext';

const Modal = () => {

    // Initial data for adding new task
    const initData = {
      id : '',
      title : '',
      description : '',
      dueDate :'',
      priority : 'Low',
      estimation: '',
      actualTime: '',
      phase : 'backlog',
      status: 'green'
    }

  const [data, setData] = useState(initData);
  const {stateProvided} = useContext(AppContext);
  const {dispatchProvided} = useContext(AppContext);

  useEffect(()=>{
    const id = stateProvided.reducerCard.length;
    setData({ ...data, id:id})
  },[])

  // Set state when Title chenged
  const doChangeTitle = (e) => {
    setData({ ...data, title: e.target.value })
  }

  // Set state when Description chenged
  const doChangeDescription = (e) => {
    setData({ ...data, description: e.target.value })
  }

  // Set state when Due Date chenged
  const doChangeDueDate = (e) => {
    setData({ ...data, dueDate: e.target.value })
  }

  // Set state when Due Date chenged
  const doChangePriority = (e) => {
    setData({ ...data, priority: e.target.value })
  }

  // Set state when Estimation chenged
  const doChangeEstimation = (e) => {
    setData({ ...data, estimation: e.target.value })
  }
  
  // Set state when Actual Tile chenged
  const doChangeActualTime = (e) => {
    setData({ ...data, actualTime: e.target.value,phase:'inProgress' })
  }
  
  const AddNewTask = () =>{
    console.log(data);
    dispatchProvided({ type: "add", data: data });
    setData(initData)
    dispatchProvided({ type: "hide"});
  }

  const hideModal = () =>{
    dispatchProvided({ type: "hide"});
    setData(initData)
  }

  return (
    <div id="overlay">
      <div id="content">
        <div className='modal-container'>
          <h2>New Task</h2>
          <p className='label' >Title:</p>
          <input className='input title' type="text" autoFocus={true}
            onChange={doChangeTitle}
            value={data.title}
          />
          <p className='label'>Description:</p>
          <textarea className='input textarea' cols="30" rows="10" value={data.description}
            onChange={doChangeDescription}>
          </textarea>
          <p className='label'>Due Date:</p>
          <input className='input date' type="date" name="" id="" value={data.dueDate}
            onChange={doChangeDueDate} />
          <p className="label">Select priority level:</p>
          <select onChange={doChangePriority}
            className='input priority' value={data.priority}>
            <option value="Low">Low</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
          </select>
          <p className='label' >Estimation(Hours):</p>
          <input className='input time' type="number" value={data.estimation}
            onChange={doChangeEstimation}
          />
          <p className='label'>Actual Time(Hours):</p>
          <input className='input time' type="number" value={data.actualTime}
            onChange={doChangeActualTime}
          />
        </div>
        <br />
        <div className='buttons'>
          <p onClick={hideModal}>Cancel</p>
          <p onClick={AddNewTask}>Add</p>
        </div>
      </div>
    </div >
  )
}
export default Modal
