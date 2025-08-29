import React from "react";
import Grandchild from "./grandchild";

const Childcomponent = ({ msg }) => {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h2>I am Child</h2>
      <p>I got "{msg}" from Parent and I will send it to my child.</p>
      <Grandchild msg={msg} />
    </div>
  );
};

export default Childcomponent;
