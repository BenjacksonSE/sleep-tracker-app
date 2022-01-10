import {useState} from "react";
import classes from "./LoginForm.module.scss"
import FormInput from './FormInput/FormInput';

const LoginForm= () => {
  const [values, setValues] = useState({
    fullName:"",
    username:"",
    birthday:"",
    password:"",
    confirmPassword:""
  })

  const inputs = [
    {
      id:1,
      name:"fullName",
      type:"text",
      placeholder:"Full Name",
      label:"Full Name"
    },
    {
      id:2,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password"
    }
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <>
      <div className={classes.loginform}>
        <form onSubmit={handleSubmit}>
          <h1 >Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
