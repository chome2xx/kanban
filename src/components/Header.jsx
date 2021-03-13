import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Header = () => {
  const { dispatchProvided } = useContext(AppContext);
  const doChangeFilter = (e) => {
    console.log(e.target.value);
    dispatchProvided({ type: "filter", title: e.target.value });
  };

  return (
    <div className="Header">
      <div className="logo">
        <h1>Kanban</h1>
      </div>
      <div className="filterArea">
        <span className="label">Filter: </span>
        <input
          type="text"
          onChange={doChangeFilter}
          placeholder="Enter title"
          className="filter"
        />
      </div>
      <div className="credential"></div>
      <div className="clear"></div>
    </div>
  );
};

export default Header;
