import React, { useContext } from "react";
import { UserContext } from "../App";

const Greatgrandchild = ({ msg }) => {
  // Accessing context message directly
  const mymsg = useContext(UserContext);

  return (
    <div style={{ border: "1px solid red", margin: "10px", padding: "10px" }}>
      <h2>I am Greatgrandchild</h2>
      <p>I got "{msg}" from Parent via props chain.</p>
      <h3>This "{mymsg}" I got directly from Parent using Context.</h3>
    </div>
  );
};

export default Greatgrandchild;
