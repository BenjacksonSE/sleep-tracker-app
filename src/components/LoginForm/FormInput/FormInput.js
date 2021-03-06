import classes from "./FormInput.module.scss"

const FormInput = (props) => {
  const {label, onChange, id, ...inputProps} = props
  return (
    <div className={classes.forminput}>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>  
    </div>
  )
}

export default FormInput
