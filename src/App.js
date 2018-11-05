import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importar componente
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
