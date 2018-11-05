import React from 'react';

class TaskList extends React.Component {
  render() {
    return (
      <div className="taskList">
        <ul>
          <li>Instalar nodeJS</li>
          <li>Instalar npm</li>
          <li>Instalar create-react-app</li>
          <li>Crear app React</li>
        </ul>
      </div>
    );
  }
}

export default TaskList;
