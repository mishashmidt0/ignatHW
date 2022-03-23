import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './style.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)

    }


    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const time = date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})
    const dateNow = date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour12: true})

    const stringTime = time
    const stringDate = dateNow


    return (
        <div className={s.containerTime}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={s.time}>
                {stringTime}
            </div>
            {show && (<div className={s.containerTime}>{stringDate}</div>)}

            <div className={s.button}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
