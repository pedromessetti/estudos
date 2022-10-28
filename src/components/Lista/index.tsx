import { useState } from 'react'
import Item from './Item'
import style from './lista.module.scss'

export default function Lista() {

  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00"
    },
    {
      tarefa: "JS",
      tempo: "01:00:00"
    }
  ])
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, {tarefa: "Estudar State's", tempo: "05:00:00"}])
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
