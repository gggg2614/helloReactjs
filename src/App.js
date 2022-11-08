import "./App.css";
import React from "react";
import {Datetime,Welcome,Counter} from './Welcome'
import {Myfunc} from "./Welcome"
import App1 from "./createContext/index"
import {Outlet,Link} from 'react-router-dom'

class Bindb extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      name: "hello world",
    };
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <input
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        ></input>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      {/* <Welcome name="123"></Welcome>
      <Welcome name="312"></Welcome>
      <Datetime></Datetime>
      <Counter></Counter>
      <Bindb></Bindb>
      <Myfunc></Myfunc>
      <App1></App1>
      */
    }
       <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/list">列表页</Link></li>
                <li><Link to="/detail">详情页</Link></li>
            </ul>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
