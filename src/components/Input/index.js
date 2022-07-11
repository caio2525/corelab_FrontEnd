import './index.css'

const Input = (props) => {
  return(
    <div className="entrada">

      <label className="label">{props.label}</label>
        <input
          id={props.name}
          className="input"
          type={props.type}
          onChange={props.handleChange}
          name={props.name}
          value={props.value}
          required={props.required}
        />

    </div>
  )
}

export default Input;
