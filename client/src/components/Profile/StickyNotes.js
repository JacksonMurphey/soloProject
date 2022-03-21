import './StickNotes.css'
import { useState, useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import Draggable from 'react-draggable'
import { AiFillCloseCircle } from 'react-icons/ai'


const startState = {
    lastCreatedNote: null,
    noteCount: 0,
    notes: []
}

const reducerNote = (prevState, action) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            const newState = {
                lastCreatedNote: new Date().toTimeString().slice(0, 8),
                noteCount: prevState.notes.length + 1,
                notes: [...prevState.notes, action.payload]
            }
            return newState
        }
        case "DELETE_NOTE": {
            const newState = {
                ...prevState,
                noteCount: prevState.notes.length - 1,
                notes: prevState.notes.filter(note => note.id !== action.payload.id)
            }
            return newState
        }
    }
};

const StickyNotes = (props) => {

    const [note, setNote] = useState('')
    const [notesState, dispatch] = useReducer(reducerNote, startState)


    const createNote = e => {
        e.preventDefault()
        if (!note) {
            return;
        }
        const newNote = {
            id: uuid(),
            text: note,
            rotate: Math.floor(Math.random() * 20),
        }
        dispatch({ type: 'ADD_NOTE', payload: newNote })
        setNote('')
    }

    const noteDrop = (e) => {
        e.target.style.left = `${e.pageX - 100}px`
        e.target.style.top = `${e.pageY - 100}px`
    }
    const dragMove = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }

    return (
        <>
            <h1 style={{
                border: "5px double #fff",
                color: '#fff',
                marginRight: "400px",
                textAlign: "center",
                background: "#010606",
                marginLeft: "350px",
                marginTop: "25px"
            }}>Sticky Notes ({notesState.noteCount})</h1>
            <span></span>

            <form onSubmit={createNote} className='note-form' style={{ marginTop: "10px" }}>
                <textarea
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder='Create a New Note...'></textarea>
                <button>Add Note</button>
            </form>


            <div onDragOver={dragMove}>
                {
                    notesState.notes.map((note, index) => (

                        <div
                            className='note'
                            key={index}
                            style={{ transform: `rotate(${note.rotate}deg)` }}
                            draggable='true'
                            onDragEnd={noteDrop}
                        >
                            <div className='close' onClick={() => dispatch({ type: "DELETE_NOTE", payload: note })}><AiFillCloseCircle /></div>
                            <pre className='text'>{note.text}</pre>

                        </div>

                    ))
                }
            </div>
        </>
    )
}
export default StickyNotes