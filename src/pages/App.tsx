import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}
