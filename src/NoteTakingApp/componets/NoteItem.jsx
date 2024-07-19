import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../Store/noteSlice';

const NoteItem = ({ note, onEdit }) => {
  const dispatch = useDispatch();

  // Function to preserve line breaks
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-amber-50 p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
      <div 
        className="text-gray-600 mb-4 overflow-y-auto max-h-60 w-full p-2 border rounded whitespace-pre-wrap break-words"
      >
        {formatContent(note.content)}
      </div>
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