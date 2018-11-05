import React from 'react';
import './index.css';

class TaskList extends React.Component {
  todos = [
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
  ];

  renderItemsArray = () => {
    const items = [];
    this.todos.forEach((item) => {
      items.push(<li key={item.id}>{item.description}</li>);
    });
    return items;
  }

  render() {
    return (
      <div className="taskList">
        <ul className="listItems">
          {this.renderItemsArray()}
        </ul>
      </div>
    );
  }
}

export default TaskList;
