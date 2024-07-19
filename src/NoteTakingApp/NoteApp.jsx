import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './componets/NoteItem';
import NoteForm from './componets/NoteForm';

const NoteApp = () => {
    
  const notes = useSelector(state => state.notes);
  const [editingNote, setEditingNote] = useState(null);
  
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes && notes.length > 0) {
        setEditingNote(notes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Take Your Note</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='p-4 bg-pink-100'>
          <h2 className="text-2xl font-semibold mb-4 p-2 bg-blue-200">Add/Edit Note</h2>
          <NoteForm 
            note={editingNote} 
            onSave={() => setEditingNote(null)} 
          />
        </div>
        <div className="p-4 bg-slate-200">
          <h2 className="text-2xl font-semibold mb-4 bg-red-200 p-2">Your Notes</h2>
          {[...notes].reverse().map(note => (
            <NoteItem 
              key={note.id} 
              note={note} 
              onEdit={setEditingNote} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteApp;