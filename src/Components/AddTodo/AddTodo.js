import React from "react";
import { motion } from "framer-motion";
import Todos from "../Todos/Todos";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./AddTodo.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const AddTodo = (props) => {
  const [hidden, setHidden] = useState(false);

  const checkTodos = props.todos.length;
  const checkHandler = () => {
    checkTodos !== 0 ? setHidden(true) : setHidden(false);
  };

  return (
    <div>
      <h1 className={classes.heading}>Tell me what would you like to do :)</h1>
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
      </motion.div>
      <motion.div
        className="show-todos"
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        whileHover={{ scale: 1.3 }}
        hidden={hidden}
        onClick={checkHandler}
      >
        <Link to={checkTodos !== 0 ? "/display-todos" : "/"}>Show Todos</Link>
      </motion.div>
      
    </div>
  );
};

export default connect(mapStateToProps, null)(AddTodo);
