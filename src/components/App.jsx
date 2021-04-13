import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

// function App(){
//   return <h1> Hello</h1>;
// }
// as a class
class App extends React.Component {
  render() {
    // return <h1> Hello</h1>;
    return <ClassComponent />;
  }
}

// class App extends React.Component {
//   render() {
//     return <ClassComponent />;
//   }
// }

export default App;
