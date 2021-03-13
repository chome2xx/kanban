import React, { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import DisplayCards from "./DisplayCards";
import Modal from "../components/Modal";
import { db } from "../firebase";

const Main = () => {
  const { stateProvided } = useContext(AppContext);
  const { dispatchProvided } = useContext(AppContext);

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      const fireStore = [];
      snapshot.docs.map((doc) =>
        fireStore.push({
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
        })
      );
      dispatchProvided({ type: "init", data: fireStore });
    });
    return () => unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <p
        onClick={() => dispatchProvided({ type: "create" })}
        className="create"
      >
        Create
      </p>

      {/* Open modal window */}
      {stateProvided.reducerModal.show && <Modal />}

      <div className="container backlog">
        <p className="progress">Backlog</p>
        <DisplayCards phase="backlog" />
      </div>
      <div className="container scheduled">
        <p className="progress">Scheduled</p>
        <DisplayCards phase="scheduled" />
      </div>
      <div className="container inProgress">
        <p className="progress">In Progress</p>
        <DisplayCards phase="inProgress" />
      </div>
      <div className="container done">
        <p className="progress">Done</p>
        <DisplayCards phase="done" />
      </div>
    </div>
  );
};

export default Main;
