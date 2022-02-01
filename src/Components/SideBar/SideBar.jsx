import React from 'react'
import style from './SideBar.module.css'

export default function SideBar() {
    return (
        <div className={`${style.sidebar}`}>
            <div className={style.user_info}>
                <img src="https://hillandharbourvets.com/wp-content/uploads/2019/08/pexels-photo-730896.jpeg" alt="" />
                <div className={style.detail}>
                    <h5>John Doe</h5>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
