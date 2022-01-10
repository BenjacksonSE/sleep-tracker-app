
import classes from "./Summary.module.scss";

const summariesCards = [
    { id: 1, title: "Number of Daies", total: "123", icon: <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        /> },
    { id: 2, title: "Total Sleep", total: "123", icon: <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        /> },
    { id: 3, title: "Sleep", total: "123", icon: <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        /> },
];

const Summary = () => {

  return (
    <div className={classes.summaries}>
      {summariesCards.map(({ id, title, total, icon }) => (
        <div className={classes.summaries__card} key={id}>
          <div className={classes.summaries__card__icon}>
            <div className={classes.icon}>{icon}</div>
          </div>
          <div className={classes.summaries__card__info}>
            <div className={classes.title}>{title}</div>
            <div className={classes.total}>{total}</div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Summary
