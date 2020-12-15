import React, { Component } from 'react';
import AnotherComponent from "./AnotherComponent"

import logo from './logo.svg';
import './App.css';


const names = ["Max", "Matt", "Nick", "Amy", "Wendy", "Adam"]

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>I'm a class component</h1>
          {/* <AnotherComponent name="Buzz"/>
          <AnotherComponent name="Woody"/>
          <AnotherComponent name="Fleur"/>
          <AnotherComponent name="Bambi"/> */}

          <h2>{names[0]}</h2>
          <ul>
            {names.map(name => {
              return<AnotherComponent name={name} age={21}/>
            })}
          </ul>
        </header>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <h1>Hey DTZ</h1>
      // </header>
//     </div>
//   );
// }




// const App = () => {
//   return (
//     <div>
//       <header className="App-header">
//         <h1>I'm an explicit return</h1>
//       </header>
//     </div>
//   );
// }

// const App = () => (
//     <div>
//       <header className="App-header">
//         <h1>I'm a single line return</h1>
//       </header>
//     </div>
//   );



export default App;
