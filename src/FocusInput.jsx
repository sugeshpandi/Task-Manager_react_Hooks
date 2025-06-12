import React, { useEffect, useRef } from 'react';

export default function FocusInput({ value, onChange }) {
  const focususeref = useRef(null);

  useEffect(() => {
    if (focususeref.current) {
      focususeref.current.focus();
    }
  }, []);

  return (
    <div>
      
      <input className='p-1 m-2 w-96 text-2xl rounded-lg' 
        type="text"
        ref={focususeref}
        value={value}
        onChange={onChange}
        placeholder="Type here ..."
      />
    </div>
  );
}
