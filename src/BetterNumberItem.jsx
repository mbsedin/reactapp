import React, { Component } from "react";

class BetterNumberItem extends Component {
  handleRemove = () => {
    console.log("JE SUIS DANS L'ENFANT");
    this.props.remove(this.props.value);
  };

  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
