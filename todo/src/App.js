import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CRUD APPLICATION</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;

