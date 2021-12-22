import React, { useState } from "react";

import classes from "./SideBar.module.scss";

const initialNavList = [
    {
        id: 0,
        text: "Dashboard",
        isActive: true,
        icon: (fillColor) => <svg fillColor={fillColor} />,
    },
    {
        id: 1,
        text: "Form Enteries",
        isActive: false,
        icon: (fillColor) => <svg fillColor={fillColor} />,
    },
    {
        id: 2,
        text: "General",
        isActive: false,
        icon: (fillColor) => <svg fillColor={fillColor} />,
    },
];

const SideBar = () => {
    const [navList, setNavList] = useState(initialNavList);

    const isActiveHandler = (id) => {
        const arr = [...navList];
        const inxOfActive = arr.find((item) => item.isActive === true).id;
        arr[inxOfActive].isActive = false;
        arr[id].isActive = true;
        setNavList(arr);
    };

    return (
        <div className={`${classes.sidebar__container}`}>
            <div className={classes.sidebar}>
                <div className={classes.sidebar__logo}>
                    <h1 className={classes.sidebar__logo__title}>
                      Sleep<span classNam>Tracker</span>
                    </h1>
                </div>
                <ul className={classes.sidebar__menu}>
                    {navList.map(({ id, text, isActive, icon }) => (
                        <li key={id} className={isActive ? classes.isActive : ""}>
                            <a
                                href={`#${text}`}
                                className={classes.link}
                                onClick={() => isActiveHandler(id)}
                            >
                                <span className={`${classes.link__text}`}>
                                    {text}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`${classes.sidebar__divider}`} />
            </div>
        </div>
    );
};

export default SideBar;