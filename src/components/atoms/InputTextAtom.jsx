// atoms/InputText.jsx
import React from 'react';

export const InputTextAtom = ({ type = "text", placeholder, required = false, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border border-green-300 rounded-md p-3 focus:border-azulLoren"
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};
