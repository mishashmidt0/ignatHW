import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './style-hw5.module.css'

function Header() {
    return (
        <div className={s.links_container}>
            <Link className={s.link} to={'/'}>Homes</Link>
            <Link className={s.link} to={PATH.PRE_JUNIOR}>Pre_junior</Link>
            <Link className={s.link} to={PATH.PRE_MIDDLE}>Pre_middle</Link>
            <Link className={s.link} to={PATH.PRE_SENIOR}>Pre_senior</Link>
            <div className={s.block}></div>
        </div>

    )
}

export default Header
