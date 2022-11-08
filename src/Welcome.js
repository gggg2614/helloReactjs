import React from "react";
import { useEffect } from "react";
// function Welcome(props) {
//   return <h1>{props.name}</h1>;
// }

export class Welcome extends React.Component {
  render() {
    return <h1>my name {this.props.name}</h1>;
  }
}

export class Datetime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      data: new Date(),
    });
  }

  componentDidMount() {
    console.log(this);
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componentDidCatch");
  }
  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={this.handleClick}>++</button>
      </div>
    );
  }
}

export function Myfunc() {
  const [num, setNum] = React.useState(1)
  useEffect(() => {
    console.log(`I'm online`)
    return () => {
      console.log('before delete')
    }
  },[num])
  
  return (
    <>
      <h2>{num}</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >+</button>
    </>
  );
}
