import Header from "./Header/Header"
import classes from "./Dashboard.module.scss"

const Dashboard = () => {
  return (
    <div className={`${classes.scroll}`}>
      <div className={`${classes.dashboard__container}`}>
        <div className={classes.dashboard}>
          <Header/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
