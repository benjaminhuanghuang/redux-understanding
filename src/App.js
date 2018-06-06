import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import { store } from "./store";

import ButtonGroup from './ButtonGroup';

class App extends Component {
  // the state object has been removed. 
  render() {
    console.log("render", store.getState().tech);
    return (<div>
      <HelloWorld tech={store.getState().tech} />
      <ButtonGroup technologies={["Angular", 'React', "Redux"]} />
    </div>)
  }
}

export default App;