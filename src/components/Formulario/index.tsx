import React from 'react'
import Botao from '../Botao'
import './styles.scss'

export default class Formulario extends React.Component {
  render() {
    return (
      <form className='novaTarefa'>
        <div className='inputContainer'>
            <label htmlFor='tarefa'>Adicione um novo estudo</label>
            <input 
                type="text" 
                name="tarefa" 
                id="tarefa" 
                placeholder='O que você quer estudar?'
                required
            />
        </div>
        <div className='inputContainer'>
            <label htmlFor='tempo'>Tempo</label>
            <input 
                type="time" 
                name="tempo" 
                id="tempo" 
                step="1" 
                min="00:00:00" 
                max="01:30:00"
                required
            />
        </div>
        <Botao />
      </form>
    )
  }
}
