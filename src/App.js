import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="createTask">
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="taskList">
          <ul className="listItems">
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
            <li>Task 4</li>
            <li>Task 5...</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
