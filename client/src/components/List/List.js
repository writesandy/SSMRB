import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="col-md-12 list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};