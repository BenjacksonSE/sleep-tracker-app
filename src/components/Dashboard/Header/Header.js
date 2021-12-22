import classes from "./Header.module.scss"

const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.header__title}>Dashboard</h2>
      <div className={classes.header__content}>
        <div className={classes.header__content__links}>
          <div className={classes.link__icon}></div>
          <div className={classes.link__icon}></div>
        </div>
      </div> 
      <div className={classes.header__content__divider}></div>
      <div className={classes.header__content__profile}>
        <span className={classes.profile__name}>Username</span>
        <div className={classes.profile__img}>
          <img src={""} alt="" className={classes.img} />
        </div>
      </div>
    </div>
  )
}

export default Header
