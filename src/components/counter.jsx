import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    name: this.props.counter.name
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind;
  }*/

  render() {
    let classess = this.getCounterColor();

    return (
      <div>
        <span style={this.style}>{this.props.counter.name}</span>
        <span style={this.style} className={classess}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </div>
    );
  }

  getCounterColor() {
    let classess = "badge m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
