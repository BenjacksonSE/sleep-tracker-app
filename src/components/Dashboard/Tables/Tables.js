import classes from "./Tables.module.scss";
import TableData from "./TableData/TableData"

const Tables = () => {
  return (
    <div>
      <div className={classes.tables}>
            <div className={classes.tables__header}>
                <h2 className={classes.tables__header__title}>
                    Sleep
                </h2>
            </div>
            <TableData />
        </div>
    </div>
  )
}

export default Tables
