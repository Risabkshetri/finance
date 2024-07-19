import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '../../Store/noteSlice';

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      dispatch(updateNote({ ...note, title, content }));
    } else {
      dispatch(addNote({ id: Date.now(), title, content }));
    }
    onSave();
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-violet-300 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="w-full p-2 mb-4 border rounded h-32"
        required
      />
      <button 
        type="submit" 
        className="hover:bg-green-500 bg-purple-800 text-white px-4 py-2 rounded"
      >
        {note ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;