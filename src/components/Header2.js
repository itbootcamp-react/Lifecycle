import React, { Component } from "react";
import FunctionComponent from "./FunctionComponent";

class Header2 extends Component {
  state = {
    favoriteColor: "red",
    name: "Jelena",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoriteColor;
    return null;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "the updated favorite is " + this.state.favoriteColor;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Header2;
