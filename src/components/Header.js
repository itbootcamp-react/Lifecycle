import React, { Component } from "react";

class Header extends Component {
  state = {
    favoriteColor: "red",
  };

  handleClick = () => {
    this.setState({ favoriteColor: "blue" });
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.handleClick}>Change color</button>
      </div>
    );
  }
}

export default Header;
