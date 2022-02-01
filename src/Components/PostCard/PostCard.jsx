import React from 'react'
import { Link } from 'react-router-dom'
import style from './PostCard.module.css'
import { Love, Comments, Share } from '../Icons/Icons'

export default function PostCard() {
    return (
        <div className={`glass ${style.post_card}`}>
            <div className={style.post_card_top}>
                <div className={style.post_info}>
                    <Link className={style.author_img} to="/">
                        <img src="https://hillandharbourvets.com/wp-content/uploads/2019/08/pexels-photo-730896.jpeg" alt="" />
                    </Link>
                    <div>
                        <Link className={style.author} to="/">John Doe</Link>
                        <div>
                            <Link className={style.category} to="/">Bug Bounty</Link>
                            <Link className={style.date} to="/">12/12/2022</Link>
                        </div>
                    </div>
                </div>
                <div className={style.three_dot}>...</div>
            </div>
            <div className={style.post_content}>
                <h3 className={style.post_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p className={style.post_desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, hic officiis, saepe nam incidunt deleniti labore doloribus vero nemo molestias sint eligendi, porro consequatur corporis?<span className={style.read_more}>Read more</span></p>
                <div className={style.post_img}>
                    <img src="https://hillandharbourvets.com/wp-content/uploads/2019/08/pexels-photo-730896.jpeg" alt="" />
                </div>
            </div>
            <div className={style.post_card_bottom}>
                <div className={style.counter}>
                    <div><span>120</span> Reacts</div>
                    <div><span>100</span> Comments</div>
                    <div><span>90</span> Share</div>
                </div>
                <div className={style.rcs_box}>
                    <span className={style.reaction}><Love /></span>
                    <span className={style.comments}><Comments /></span>
                    <span className={style.share}><Share /></span>
                </div>
            </div>
        </div>
    )
}
