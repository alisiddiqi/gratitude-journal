import React from "react";
import '../App.css';


const Note = (props) => {
    const handleClick = () => {
        props.onDelete(props.id)
    }

    return (
        <div className="card">
    
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.category}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Note;