import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h1>Kanban</h1>
      </div>
      <div className="filterArea">
        <span className="label">Filter: </span>
        <input type="text" className="filter" />
      </div>
      <div className="credential"></div>
      <div className="clear"></div>
      <hr />
    </div>
  );
};

export default Header;
