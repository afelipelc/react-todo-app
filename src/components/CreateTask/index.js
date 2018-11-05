import React from 'react';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
    };
  }

  handleChange = (e) => {
    const {
      target,
    } = e;

    //update state
    this.setState({
      description: target.value,
    });
  }

  handleSubmit = () => {
    const { description } = this.state;

    if (description) {
      this.props.addTask({
        id: new Date(),
        description,
      });

      //clean text
      this.setState({
        description: '',
      })
    }
  }

  render() {
    const { description } = this.state;
    return (
      <div className="createTask">
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={this.handleChange.bind(this)}
        />
        <button
          onClick={this.handleSubmit.bind(this)}
        >
          Agregar
        </button>
      </div>
    );
  }
}

// exportar módulo o componente
export default CreateTask;
