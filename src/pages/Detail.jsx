import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Detail() {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/detail") navigate("/home");
    return () => {};
  });
  return <div>detail</div>;
}

export default class App extends React.Component {
  render() {
    return <Detail></Detail>;
  }
}
