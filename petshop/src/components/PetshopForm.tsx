import React, { ChangeEvent, FormEvent, useState } from 'react';
import FormLabel from './formAttributes/FormLabel';
import InputField from './formAttributes/InputField';
import SubmitButton from './formAttributes/SubmitButton';
import ModalResponse from './ModalResponse';
import { FaX } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const PetshopForm: React.FC = () => {
  const ROUTE = 'http://localhost:8080/api/calculateBestPetshop';

  // Gerenciamento de estado do formulário
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    smallDogs: 0,
    largeDogs: 0
  });

  // Gerenciamento de estado do modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ bestPetshopName: '', totalPrice: 0 });
  const [error, setError] = useState(false);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'date' ? value : parseInt(value, 10)
    });
  };

  // Função para enviar os dados do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(ROUTE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao calcular melhor petshop.');
      }

      const data = await response.json();
      setModalContent({ bestPetshopName: data.bestPetshopName, totalPrice: data.totalPrice });
      setModalVisible(true);

    } catch (error: any) {
      setError(true);
      setModalVisible(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container space-y-4 p-14 bg-white rounded shadow-md border border-blue-600 max-w-lg w-full mx-auto">
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

      <ModalResponse
        isVisible={modalVisible}
        onClose={() => {
          setError(false);
          setModalVisible(false);
        }}
      >
        {error && (
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-red-600 bg-red-300 rounded-full p-2" style={{ boxShadow: '0 0 0 8px #f8d6d6' }}>
                <FaX />
              </div>
            </div>
            <p className="text-md font-bold mt-4">Ocorreu um erro ao calcular o melhor petshop.</p>
          </div>
        )}

        {!error && (
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="text-xl text-green-600 bg-green-300 rounded-full p-2" style={{ boxShadow: '0 0 0 8px #aaf1c0' }}>
                <FaCheckCircle />
              </div>
            </div>
            <h3 className="text-2xl text-center w-full pb-2 font-medium text-gray-900" id="modal-title">
              Melhor Petshop Encontrado
            </h3>
            <div className="mt-2">
              <p className="text-sm font-bold text-black">
                Nome:
                <span className="ml-2 font-light">{modalContent.bestPetshopName}</span>
              </p>
              <p className="text-sm font-bold text-black">
                Preço Total:
                <span className="ml-2 font-light">R$ {modalContent.totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
        )}
      </ModalResponse>
    </div>
  );
};

export default PetshopForm;
