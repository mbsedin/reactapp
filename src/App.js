import React, { Component } from "react";
import NumberList from "./NumberList";
import BetterNumberList from "./BetterNumberList";

class App extends Component {
  render() {
    return (
      <div className="">
        <NumberList />
        <BetterNumberList />
      </div>
    );
  }
}

export default App;
