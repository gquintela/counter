import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAddCounter}
          className="btn btn-primary btn-sm m-2"
        >
          Add Counter
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
