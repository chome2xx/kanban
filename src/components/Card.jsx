import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Card = (props) => {
  // const {stateProvided} = useContext(AppContext);
  const { dispatchProvided } = useContext(AppContext);

  const setStatus = () => {
    let status = "";
    const today = formatDate(new Date());
    const dueDate = formatDate(new Date(props.dueDate));
    if (props.phase === "done") {
      status = "white";
    } else if (props.dueDate === "") {
      status = "white";
    } else if (dueDate > today) {
      status = "green";
    } else if (dueDate === today) {
      status = "orange";
    } else {
      status = "red";
    }
    return status;
  };

  const formatDate = (date) => {
    let formatDate;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    formatDate = year + ("0" + month).slice(-2) + ("0" + day).slice(-2);
    return formatDate;
  };

  return (
    <div
      className="card"
      id={props.id}
      onClick={() => [dispatchProvided({ type: "edit", data: props })]}
    >
      <div className={setStatus()}></div>
      <p className="title">{props.title}</p>
      {/* <p className="description">{props.description}</p> */}
      <div>
        <ul className="fields">
          <li>Due Date: {props.dueDate}</li>
          <li>Estimation: {props.estimation} h</li>
          <li>Priority: {props.priority}</li>
          <li>Actual Time: {props.actualTime} h</li>
        </ul>
      </div>
      <div className="clear">
        {/* <p
          // id={props.id}
          // onClick={() => [dispatchProvided({ type: "edit", data: props })]}
          href="#"
          className="edit"
        >
          Edit
        </p> */}
      </div>
    </div>
  );
};

export default Card;
