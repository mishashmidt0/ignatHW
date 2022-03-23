import React from 'react'
import s from './style.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {stateType} from "./bll/homeWorkReducer";


type hwPropsType = {
    people: stateType
    sortUp: () => void
    sortDown: () => void
    chek: () => void
}

export function HW8ClearFunction(props: hwPropsType) {
    return (
        <div className={s.container}>

            {props.people.map((p: any) => (
                <div key={p._id} className={s.users}>
                    <div className={s.block}>{p.name} </div>
                    <div className={s.block}> {p.age}</div>
                </div>
            ))}
            <div className={s.button}>
                <div><SuperButton onClick={props.sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={props.sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={props.chek}>check 18</SuperButton></div>
            </div>
        </div>
    )
}

