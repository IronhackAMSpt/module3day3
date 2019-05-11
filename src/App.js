import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Tas from './Tas';

class App extends Component {
  state = {
    counter: 0,
    tas: [
      {
        name: "Matt",
        gender: "male",
        mistery: true,
        languages: ["Dutch", "English"]
      },{
        name: "Lieneke",
        gender: "female",
        mistery: true,
        languages: ["English", "little Dutch", "litte spanish maybe"]
      }
    ]
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>the classroom is on the {this.state.counter}</h2>
            {this.state.showAddress ? "Wework strawinskylaan" : "no address"}
          <p onClick={this.clickHandler}>
            Learn React
          </p>
          {this.state.tas.map((ta, index) => {
            return (<Tas key={index} name={ta.name} gender={ta.gender}/>
            )
          })}
        </header>
      </div>
    );
  
  }
}

export default App;
