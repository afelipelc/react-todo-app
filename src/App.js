import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importar componente
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          description: 'Create component',
        },
        {
          id: 2,
          description: 'Use component',
        },
        {
          id: 3,
          description: 'Add state to component',
        }
      ],
    };
  }

  handleAddTask = (task) => {
    const { todos } = this.state;
    todos.push(task);

    //update state
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div className="App">
        <CreateTask
          addTask={this.handleAddTask}
        />
        <TaskList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
