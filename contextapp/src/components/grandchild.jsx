import React from "react";
import Greatgrandchild from "./greatgrandchild";

const Grandchild = ({ msg }) => {
  return (
    <div style={{ border: "1px solid green", margin: "10px", padding: "10px" }}>
      <h2>I am Grandchild</h2>
      <p>I got "{msg}" from Child and I will send it to Greatgrandchild.</p>
      <Greatgrandchild msg={msg} />
    </div>
  );
};

export default Grandchild;
