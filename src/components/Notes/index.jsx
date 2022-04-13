import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';

export default function Notes() {
  const state = {
    notes: [
      { id: 1, title: 'My note 1' },
      { id: 2, title: 'My note 2' },
      { id: 3, title: 'My note 3' },
    ],
  };

  const renderNotes = (notes) => (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  const { notes } = state;
  const { noteId } = useParams();
  let selectedNote = false;

  if (noteId > 0) {
    selectedNote = notes.filter((note) => note.id === Number(noteId));
  }

  return (
    <div className="Notes">
      <h1>Notes</h1>

      {renderNotes(selectedNote || notes)}
    </div>
  );
}
