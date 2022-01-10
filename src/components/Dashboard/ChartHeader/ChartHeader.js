import ChartContainer from "./ChartContainer/ChartContainer"
import classes from "./ChartHeader.module.scss"

const ChartHeader = () => {
  return (
      <div className={classes.chartheader}>
        <div className={classes.chartheader__headline}>
          <h2 className={classes.chartheader__headline__title}>Sleep Graph</h2>
          <div className={classes.chartheader__headline__content}>
            <div className={classes.legend}>
              <div className={classes.legend__item}>
                <div className={classes.orange}/>
                <span>Sleep</span>
              </div>
              <div className={classes.legend__item}>
                <div className={classes.green}/>
                <span>Sleep</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.chartheader__chart}>
          <ChartContainer />
        </div>
      </div>
  )
}

export default ChartHeader
