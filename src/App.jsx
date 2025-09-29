import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Note from '../src/components/Note';
import CreateNote from "../src/components/CreateNote";

function App() {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  const findCategory = (category) => {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return category !== noteItem.category;
      })
    })
  }

  return (
    <> 
      {/* Add filter funcitonalitu */}
      <CreateNote onAdd={addNote} /> 
      {notes.map((noteItem, index) => {
        return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          category={noteItem.category}
          onDelete={deleteNote}
          onCategory={findCategory}
        />
      );
      })} 

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
   
    </>
  )
}

export default App
