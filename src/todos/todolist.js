import React from "react";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [ {text: 'hello todo'} ] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={todo} />) }
    </div>
);

export default TodoList;