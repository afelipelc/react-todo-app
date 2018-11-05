import React from 'react';

class CreateTask extends React.Component {
  render() {
    return (
      <div className="createTask">
        <input type="text" placeholder="Descripción" />
        <button>
          Agregar
        </button>
      </div>
    );
  }
}

// exportar módulo o componente
export default CreateTask;
