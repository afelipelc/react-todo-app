import React from 'react';
import './index.css';

class TaskList extends React.Component {
  renderItems = () => {
    // destructing
    const { todos } = this.props;

    // map array to <li> array
    return todos.map((item) => <li key={item.id}>{item.description}</li>);
  }

  render() {
    return (
      <div className="taskList">
        <ul className="listItems">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

export default TaskList;
