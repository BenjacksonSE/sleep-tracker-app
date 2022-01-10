import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <>
      <div className={classes.login}>
        <LoginForm />
      </div>
    </>
  )
}

export default Login
