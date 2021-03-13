import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h1>Kanban</h1>
      </div>
      <div className="filterArea">
        <span className="label">Filter: </span>
        <input type="text" placeholder="Enter title" className="filter" />
      </div>
      <div className="credential"></div>
      <div className="clear"></div>
    </div>
  );
};

export default Header;
