import React from 'react';

function Container({children, className = ''}) {
  return (
    <div className={`${className} bg-slate-300 overflow-hidden shadow rounded-lg`}>
        {children}
    </div>
  );
}

export default Container;
