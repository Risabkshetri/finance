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
    <div className="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg shadow-lg mb-4">
  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{note.title}</h3>
  <div 
    className="text-gray-600 dark:text-gray-300 mb-4 overflow-y-auto max-h-60 w-full p-2 border border-gray-300 dark:border-gray-600 rounded whitespace-pre-wrap break-words bg-white dark:bg-gray-800"
  >
    {formatContent(note.content)}
  </div>
  <div className="flex justify-end">
    <button 
      onClick={() => onEdit(note)} 
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2 transition duration-150 ease-in-out"
    >
      Edit
    </button>
    <button 
      onClick={() => dispatch(deleteNote(note.id))} 
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-150 ease-in-out"
    >
      Delete
    </button>
  </div>
</div>
  );
};

export default NoteItem;