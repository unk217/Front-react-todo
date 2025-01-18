// CheckboxWithApi.js
import React, { useState, useEffect } from 'react';
import { fetchTaskStatus } from './task.api';

function CheckboxWithApi() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTaskStatus();
        setIsChecked(data.isChecked);
      } catch (error) {
        // Manejar el error si es necesario
      }
    };

    fetchData();
  }, []); // Se ejecutará solo una vez al montarse el componente

  const handleCheckboxChange = () => {
    // Aquí podrías implementar la lógica para enviar la actualización a la API si es necesario
    // pero por ahora, simplemente cambiaremos el estado local
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Seleccionado
      </label>
      <p>El checkbox está {isChecked ? 'seleccionado' : 'deseleccionado'}.</p>
    </div>
  );
}

export default CheckboxWithApi;
