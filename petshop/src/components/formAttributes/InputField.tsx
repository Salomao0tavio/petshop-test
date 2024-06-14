import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, type, value, onChange, label }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-black">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

export default InputField;
