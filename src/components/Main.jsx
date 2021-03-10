import React, { useReducer, useEffect, useState } from "react";
import Card from "./Card";
import AppContext from "../contexts/AppContext";
import Modal from "../components/Modal";
import rootReducer from "../reducers/index";
import { db } from "../firebase";

const initState = {
  reducerModal: { show: false, mode: "", id: "" },
};

// Display card components
const dispCards = (cards, phase) => {
  // Filter data by phase
  const filteredCards = cards.filter((value) => {
    return value.phase === phase;
  });

  // Generate card componets
  return filteredCards.map((value) => (
    <Card
      key={value.id}
      id={value.id}
      dueDate={value.dueDate}
      priority={value.priority}
      estimation={value.estimation}
      actualTime={value.actualTime}
      title={value.title}
      memo={value.memo}
      status={value.status}
      phase={value.phase}
      completed={value.completed}
    />
  ));
};

const Main = () => {
  const [state, dispacth] = useReducer(rootReducer, initState);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          memo: doc.data().memo,
          dueDate: doc.data().dueDate,
          priority: doc.data().priority,
          estimation: doc.data().estimation,
          actualTime: doc.data().actualTime,
          status: doc.data().status,
          phase: doc.data().phase,
          completed: doc.data().completed,
        }))
      );
    });
    return () => unSub();
  }, []);

  return (
    <AppContext.Provider
      value={{ stateProvided: state, dispatchProvided: dispacth }}
    >
      <div className="main">
        <p onClick={() => dispacth({ type: "create" })} className="create">
          Create
        </p>

        {/* Open modal window */}
        {state.reducerModal.show && <Modal />}

        <div className="container backlog">
          <p className="progress">Backlog</p>
          {dispCards(tasks, "backlog")}
        </div>
        <div className="container scheduled">
          <p className="progress">Scheduled</p>
          {dispCards(tasks, "scheduled")}
        </div>
        <div className="container inProgress">
          <p className="progress">In Progress</p>
          {dispCards(tasks, "inProgress")}
        </div>
        <div className="container done">
          <p className="progress">Done</p>
          {dispCards(tasks, "done")}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Main;
