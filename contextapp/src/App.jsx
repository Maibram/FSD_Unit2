import React from "react";
import Childcomponent from "./components/child";
import Greatgrandchild from "./components/greatgrandchild";

// 1. Create Context
export const UserContext = React.createContext();

const App = () => {
  const msg = "Invitation for a function"; // will go through props
  const msg2 = "Please come for dinner!"; // will go via context

  return (
    <div>
      <h1>Hi I am Parent component</h1>
      <p>I want to send "{msg}" to my Greatgrandchild</p>

      {/* Passing message using props */}
      <Childcomponent msg={msg} />

      {/* Passing message using context */}
      <UserContext.Provider value={msg2}>
        <Greatgrandchild />
      </UserContext.Provider>
    </div>
  );
};

export default App;
