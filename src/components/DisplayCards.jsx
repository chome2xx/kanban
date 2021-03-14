import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Card from "../components/Card";

const DisplayCards = (props) => {
  const { stateProvided } = useContext(AppContext);

  // Filter data by phase
  const filteredCards = stateProvided.reducerTasks.filter((value) => {
    return (
      value.phase === props.phase &&
      value.title.indexOf(stateProvided.reducerFilter) > -1
    );
  });

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

export default DisplayCards;
