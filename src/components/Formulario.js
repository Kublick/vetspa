import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = () => {
  // Crear state
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, actualizarError] = useState(false);

  // Función que se ejecuta con cada input

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // extraer los valores

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando se envía el formulario
  const submitCita = (e) => {
    e.preventDefault();

    console.log(mascota);

    // Validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar mensaje de error
    actualizarError(false);

    // Asignar un id
    cita.id = uuidv4();

    // crear la cita

    // reiniciar el form
  };

  return (
    <Fragment>
      <h1>Crear Citas</h1>
      {error ? (
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label> Nombre Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={actualizarState}
          value={mascota}
        />

        <label> Nombre Dueño</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre del Dueño Mascota'
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={actualizarState}
          value={hora}
        />
        <label> Nombre Dueño</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
