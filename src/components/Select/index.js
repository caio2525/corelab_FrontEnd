import './index.css';

const Select = (props) => {
  return(
    <div className="select_container">
      <label className="label">{props.label}</label>
      <select
        className="select"
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
      >
        <option value="">--choose--</option>
        {
          props.options && props.options.map((option, key) => <option key={key} value={option}>{option}</option>)
        }
      </select>
    </div>
  )
}

export default Select;
