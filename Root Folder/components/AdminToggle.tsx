
import React from 'react';
import { useCMS } from '../context/CMSContext';

const AdminToggle: React.FC = () => {
  const { isAdmin, setIsAdmin, saveChanges } = useCMS();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {isAdmin && (
        <button
          onClick={saveChanges}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold uppercase tracking-widest text-sm flex items-center animate-in slide-in-from-bottom"
        >
          <i className="fas fa-save mr-2"></i> Save Changes
        </button>
      )}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className={`${isAdmin ? 'bg-amber-500' : 'bg-stone-900'} hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-full shadow-2xl font-bold uppercase tracking-widest text-sm flex items-center transition-all`}
      >
        <i className={`fas ${isAdmin ? 'fa-unlock' : 'fa-lock'} mr-2`}></i>
        {isAdmin ? 'Exit Edit Mode' : 'Admin: Edit Site'}
      </button>
    </div>
  );
};

export default AdminToggle;
