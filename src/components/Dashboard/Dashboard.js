import Header from "./Header/Header"
import classes from "./Dashboard.module.scss"
import Overview from "./Overview/Overview"
import Summary from "./Summary/Summary"

const Dashboard = () => {
  return (
    <div className={`${classes.scroll}`}>
      <div className={`${classes.dashboard__container}`}>
        <div className={classes.dashboard}>
          <Header/>
          <Overview />
          <Summary />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
