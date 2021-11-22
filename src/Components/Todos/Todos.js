import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import styles from './Todos.module.css';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo.trim().length === 0) {
      alert("I could not save nothing :( Enter proper thing to do :)");
      setTodo("");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className={styles.addTodos}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className={styles.todoInput}
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.addBtn}
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
