import React, { useState } from 'react';
import FormLabel from './formAttributes/FormLabel';
import InputField from './formAttributes/InputField';
import SubmitButton from './formAttributes/SubmitButton';

const PetshopForm: React.FC = () => {
  const [formData, setFormData] = useState({
    date: '',
    smallDogs: '',
    largeDogs: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container space-y-4 p-10 bg-white rounded shadow-md border border-blue-600 max-w-lg w-full mx-auto">
      <FormLabel text="Insira os dados da visita" />
      <InputField 
        id="date" 
        name="date" 
        type="date" 
        value={formData.date} 
        onChange={handleChange} 
        label="Data" 
      />
      <InputField 
        id="smallDogs" 
        name="smallDogs" 
        type="number" 
        value={formData.smallDogs} 
        onChange={handleChange} 
        label="Quantidade de cães pequenos" 
      />
      <InputField 
        id="largeDogs" 
        name="largeDogs" 
        type="number" 
        value={formData.largeDogs} 
        onChange={handleChange} 
        label="Quantidade de cães grandes" 
      />
      <SubmitButton text="Enviar" />
    </form>
  );
};

export default PetshopForm;
