// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNote, updateNote } from '../../Store/noteSlice';

// const NoteForm = ({ note, onSave }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (note) {
//       setTitle(note.title);
//       setContent(note.content);
//     }
//   }, [note]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (note) {
//       dispatch(updateNote({ ...note, title, content }));
//     } else {
//       dispatch(addNote({ id: Date.now(), title, content }));
//     }
//     onSave();
//     setTitle('');
//     setContent('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-violet-300 dark:bg-violet-700 p-4 rounded-lg shadow-lg">
//     <input
//       type="text"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//       placeholder="Note Title"
//       className="w-full p-2 mb-4 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent"
//       required
//     />
//     <textarea
//       value={content}
//       onChange={(e) => setContent(e.target.value)}
//       placeholder="Note Content"
//       className="w-full p-2 mb-4 border rounded h-32 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent"
//       required
//     />
//     <button 
//       type="submit" 
//       className="hover:bg-green-500 dark:hover:bg-green-600 bg-purple-800 dark:bg-purple-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition duration-150 ease-in-out"
//     >
//       {note ? 'Update Note' : 'Add Note'}
//     </button>
//   </form>
//   );
// };

// export default NoteForm;




import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '../../Store/noteSlice';

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (note === null) {
      setTitle('');
      setContent('');
      setIsEditing(false);
     
    } else {
      setTitle(note.title);
      setContent(note.content);
      setIsEditing(true);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateNote({ ...note, title, content }));
    } else {
      dispatch(addNote({ id: Date.now(), title, content }));
    }
    onSave();
    setTitle('');
    setContent('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-violet-300 dark:bg-violet-700 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full p-2 mb-4 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="w-full p-2 mb-4 border rounded h-32 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent"
        required
      />
      <button 
        type="submit" 
        className="hover:bg-green-500 dark:hover:bg-green-600 bg-purple-800 dark:bg-purple-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition duration-150 ease-in-out"
      >
        {isEditing ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;