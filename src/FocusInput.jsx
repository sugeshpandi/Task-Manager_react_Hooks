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
      <p>This input should automatically be focused:</p>
      <input
        type="text"
        ref={focususeref}
        value={value}
        onChange={onChange}
        placeholder="Type here ..."
      />
    </div>
  );
}
