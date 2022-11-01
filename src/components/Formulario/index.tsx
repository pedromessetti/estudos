import React, { useState } from 'react'
import { ITarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {

  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    setTarefas((tarefasAntigas) =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )

    setTarefa("")
    setTempo("00:00")
  }

  return (
    <form 
      className={style.novaTarefa} 
      onSubmit={adicionarTarefa}
      autoComplete="off"
    >
      <div className={style.inputContainer}>
        <label htmlFor='tarefa'>Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          placeholder='O que desejas estudar?'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          step="1"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit" >Adicionar</Botao> {
      //Chama o componente Botão e passa automaticamente como children o texto dentro dele e define seu tipo como submit
}
    </form>
  )

}
