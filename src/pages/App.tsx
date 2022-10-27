import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './styles.scss'

export default function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}
