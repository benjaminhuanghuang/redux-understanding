import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import { store } from "./store";

import ButtonGroup from './ButtonGroup';

class App extends Component {
  state = store.getState();
  // the state object has been removed. 
  render() {
    console.log("render", store.getState().tech);
    return (<div>
      <HelloWorld tech={this.state.tech} />
      <ButtonGroup technologies={["Angular", 'React', "Redux"]} />
    </div>)
  }
}

export default App;