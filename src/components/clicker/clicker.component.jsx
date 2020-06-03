import React from "react";
import "./clicker.styles.scss";

class Clicker extends React.Component {
  constructor(props) {
    super();

    this.state = {
      count: props.count,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecreament = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState((prevState) => ({ count: 0 }));
  };

  render() {
    return (
      <div className="container">
        <div className="clicker border border-secondary rounded">
          <div className="clicker-display d-flex align-items-center bg-light text-secondary">
            <div className="mx-auto display-1">{this.state.count}</div>
          </div>
          <div className="clicker-button-panel d-flex flex-row">
            <button
              className="btn btn-success w-100"
              onClick={this.handleIncrement}
            >
              <i className="fa fa-plus fa-2x"></i>
            </button>
            <button
              className="btn btn-warning w-100"
              onClick={this.handleReset}
            >
              <i className="fa fa-refresh fa-2x"></i>
            </button>
            <button
              className="btn btn-danger w-100"
              onClick={this.handleDecreament}
            >
              <i className="fa fa-minus fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Clicker.defaultProps = {
  count: 0,
};

export default Clicker;
