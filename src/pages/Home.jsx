import React from "react";
import {useLocation} from 'react-router-dom'

function Detail() {
  let {pathname} = useLocation()
  console.log(pathname)
  return <div>home</div>; 
}

export default class App extends React.Component {
  render() {
    return <Detail></Detail>;
  }
}
