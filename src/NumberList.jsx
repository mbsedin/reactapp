import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  state = { nums: [1, 2, 3, 4, 5] };

  remove = (num) => {
    this.setState((ste) => ({
      nums: ste.nums.filter((n) => n !== num),
    }));
  };

  render() {
    let nums = this.state.nums.map((num) => (
      <NumberItem key={num} value={num} remove={() => this.remove(num)} />
      //   <NumberItem key={num} value={num} remove={(e) => this.remove(num, e)} />
      //   <NumberItem key={num} value={num} remove={this.remove.bind(this, num)} />
    ));
    return (
      <div className="">
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
