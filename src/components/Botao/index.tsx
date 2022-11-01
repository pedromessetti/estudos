//Estilização exclusiva do componente Botao e seus filhos
import style from './botao.module.scss'

interface Props {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export default function Botao({ onClick, type, children }: Props) {
  return (
    <button 
      type={type} 
      className={style.botao}
      onClick={onClick}
    >
      {children}
    </button>
)
}
