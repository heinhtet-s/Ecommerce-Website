import React from 'react'
import classes from './Sidebar.module.css'

const Sidebar = ({ isOpened, opened }) => {
    return (
        <aside className={`${isOpened ? "opened" : ""} drawer`}>
            <div className={classes["drawer-header"]}>
                <p> LOGO</p>
            </div>
        </aside>
    )
}
export default Sidebar