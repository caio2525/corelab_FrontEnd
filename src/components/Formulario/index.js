import { Button} from "../../components";
import './index.css';

const Formulario = (props) => {
  return(
    <form className="formulario" onSubmit={props.handleSubmit}>
      {props.children}
      <div className="save_button_container">
        <Button type="submit" text="Salvar" onClick={() => {}} />
      </div>
    </form>
  )
}

export default Formulario;
