import React from 'react'
import Botao from '../Botao'
import style from './formulario.module.scss'

export default class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('State:', this.state)
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
            <label htmlFor='tarefa'>Adicione um novo estudo</label>
            <input 
                type="text" 
                name="tarefa" 
                id="tarefa" 
                value={this.state.tarefa}
                onChange={(evento) => this.setState({...this.state, tarefa: evento.target.value})}
                placeholder='O que você quer estudar?'
                required
            />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor='tempo'>Tempo</label>
            <input 
                type="time" 
                name="tempo" 
                id="tempo"
                value={this.state.tempo} 
                onChange={(evento) => this.setState({...this.state, tempo: evento.target.value})}
                step="1" 
                min="00:00:00" 
                max="01:30:00"
                required
            />
        </div>
        <Botao texto="Adicionar" type="submit"/>
      </form>
    )
  }
}
