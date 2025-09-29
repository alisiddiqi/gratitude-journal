import React, {useState} from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:"",
        category:""
    })

const handleChange = (event) => {
    const { name, value } = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
    });
}

    const submitNote = (event) => {
    props.onAdd(note);
    setNote({
        title: "",
        content:"",
        category:""
    });
    event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                />
                <textarea 
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
                />
               
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )

}

export default CreateNote;