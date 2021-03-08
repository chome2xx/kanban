import React, { useContext, useState, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import { db } from "../firebase";

const Modal = (props) => {
  // Initial data for adding new task
  const initData = {
    id: "",
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    estimation: "",
    actualTime: "",
    phase: "backlog",
    status: "green",
  };

  const { stateProvided } = useContext(AppContext);
  const { dispatchProvided } = useContext(AppContext);
  const [data, setData] = useState(initData);
  const mode = stateProvided.reducerModal.mode;

  // Set data
  useEffect(() => {
    if (mode === "edit") {
      const editData = stateProvided.reducerModal.editData;
      setData(editData);
    }
  }, []);

  // Set state when Title chenged
  const doChangeTitle = (e) => {
    setData({ ...data, title: e.target.value });
  };

  // Set state when Description chenged
  const doChangeDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  // Set state when Due Date chenged
  const doChangeDueDate = (e) => {
    if (data.actualTime > 0) {
      setData({ ...data, dueDate: e.target.value, phase: "inProgress" });
    } else if (e.target.value !== "") {
      setData({ ...data, dueDate: e.target.value, phase: "scheduled" });
    }
  };

  // Set state when Due Date chenged
  const doChangePriority = (e) => {
    setData({ ...data, priority: e.target.value });
  };

  // Set state when Estimation chenged
  const doChangeEstimation = (e) => {
    setData({ ...data, estimation: e.target.value });
  };

  // Set state when Actual Tile chenged
  const doChangeActualTime = (e) => {
    if (e.target.value > 0) {
      setData({ ...data, actualTime: e.target.value, phase: "inProgress" });
    } else if (data.dueDate !== "") {
      setData({ ...data, actualTime: e.target.value, phase: "scheduled" });
    }
  };

  const addNewCard = () => {
    db.collection("tasks").add(data);
    setData(initData);
    dispatchProvided({ type: "hide" });
  };

  const updateCard = () => {
    db.collection("tasks").doc(data.id).set(data);
    setData(initData);
    dispatchProvided({ type: "hide" });
  };

  const deleteCard = () => {
    db.collection("tasks").doc(data.id).delete();
    setData(initData);
    dispatchProvided({ type: "hide" });
  };

  const hideModal = () => {
    dispatchProvided({ type: "hide" });
    setData(initData);
  };

  return (
    // Render Modal window
    <div id="overlay">
      <div id="content">
        <div className="modal-container">
          {/* Mode */}
          {mode === "create" ? <h2>New Card</h2> : <h2>Edit Card</h2>}
          {/* Title */}
          <p className="label">Title:</p>
          <input
            className="input title"
            type="text"
            autoFocus={true}
            onChange={doChangeTitle}
            value={data.title}
          />
          {/* Description */}
          <p className="label">Description:</p>
          <textarea
            className="input textarea"
            cols="30"
            rows="10"
            value={data.description}
            onChange={doChangeDescription}
          ></textarea>
          {/* Due Date */}
          <p className="label">Due Date:</p>
          <input
            className="input date"
            type="date"
            name=""
            id=""
            value={data.dueDate}
            onChange={doChangeDueDate}
          />
          {/* Priority */}
          <p className="label">Select priority level:</p>
          <select
            onChange={doChangePriority}
            className="input priority"
            value={data.priority}
          >
            <option value="Low">Low</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
          </select>
          {/* Estimation */}
          <p className="label">Estimation(Hours):</p>
          <input
            className="input time"
            type="number"
            value={data.estimation}
            onChange={doChangeEstimation}
          />
          {/* Actual Time */}
          <p className="label">Actual Time(Hours):</p>
          <input
            className="input time"
            type="number"
            value={data.actualTime}
            onChange={doChangeActualTime}
          />
        </div>
        <br />
        {/* Buttons */}
        <div className="buttons">
          <p onClick={hideModal}>Cancel</p>
          {mode === "create" ? (
            <p onClick={addNewCard}>Add</p>
          ) : (
            <p onClick={updateCard}>Update</p>
          )}
        </div>
        {mode === "edit" && (
          <p onClick={deleteCard} className="delete">
            Delete this card.
          </p>
        )}
      </div>
    </div>
  );
};
export default Modal;
