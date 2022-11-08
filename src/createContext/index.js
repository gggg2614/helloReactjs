import React, { createContext, useState, memo } from "react";

const MsgContext = createContext();

const Son = memo(() => {
  console.log("son11change");
  return (
    <MsgContext.Consumer>{({ msg }) => <h2>son {msg}</h2>}</MsgContext.Consumer>
  );
});

function Son2() {
  console.log("son22change");
  return (
    <MsgContext.Consumer>{({ msg }) => <h2>son {msg}</h2>}</MsgContext.Consumer>
  );
}

function Father() {
  const [msg, setmsg] = useState("msg");
  return (
    <>
      <button onClick={() => setmsg("newmsg")}></button>
      <Son></Son>
      <Son2></Son2>
    </>
  );
}

export default function App1() {
  const hh = "hw";
  return (
    <MsgContext.Provider value={{ msg: hh }}>
      <Father></Father>
    </MsgContext.Provider>
  );
}
