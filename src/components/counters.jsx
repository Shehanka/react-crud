import React, { Component } from "react"; // imrc
import Counter from "./counter";

class Counters extends Component {
  // cc

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    console.log(counterId);
    this.setState({
      counters
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
