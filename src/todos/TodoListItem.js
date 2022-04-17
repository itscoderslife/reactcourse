import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container"> 
        {/* use strikethrough text for completed items and disabled Done button */}
        <h3>{todo.text}</h3> 
        <div className="buttons-container">
            {todo.isCompleted ? null : <button
                    onClick={() => onCompletedPressed(todo.text)}
                    className="completed-button">Done</button>}
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>        
);

export default TodoListItem;