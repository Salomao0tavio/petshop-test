import React from 'react';

interface FormLabelProps {
  text: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ text }) => (
  <label className="block text-xl text-center font-bold text-black">
    {text}
  </label>
);

export default FormLabel;
