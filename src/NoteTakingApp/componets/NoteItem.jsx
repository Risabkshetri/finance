import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../Store/noteSlice';

const NoteItem = ({ note, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-pink-100 p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4">{note.content}</p>
      <div className="flex justify-end">
        <button 
          onClick={() => onEdit(note)} 
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button 
          onClick={() => dispatch(deleteNote(note.id))} 
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;