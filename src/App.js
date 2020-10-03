import React, { Component } from "react";
import Header from "./components/Header";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isPrecise: false };
  }

  startInterval() {
    let delay;
    if (this.state.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.setIntervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }

  componentDidMount() {
    this.startInterval();
  }

  componentDidUpdate(prevState) {
    if (this.state.isPrecise === prevState.isPrecise) {
      return;
    }
    clearInterval(this.setIntervalID);
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.setIntervalID);
  }

  handleClick = () => {
    const { isPrecise } = this.state;
    this.setState({ isPrecise: !isPrecise });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>
          {this.state.isPrecise
            ? this.state.date.toISOString()
            : this.state.date.toLocaleTimeString()}
        </h1>
        <button onClick={this.handleClick}>Toggle precise mod</button>
      </div>
    );
  }
}

export default Clock;
