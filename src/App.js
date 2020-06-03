import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Clicker from "./components/clicker/clicker.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "React Clicker",
    };
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default App;
