import React from "react";
import "./index.css";
import DisplayTodos from "./Components/TodoList/DisplayTodos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./Components/AddTodo/AddTodo";

function App(props) {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<AddTodo />} />
          <Route exact path="/display-todos" element={<DisplayTodos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
