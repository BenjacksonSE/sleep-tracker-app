import SideBar from "../../components/SideBar/SideBar"
import Dashboard from "../../components/Dashboard/Dashboard"
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <SideBar />
        <Dashboard />
      </div>
    </>
  )
}

export default Home
