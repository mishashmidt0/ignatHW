import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './hw11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div className={s.dubleRange}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                />
                <span>{value2}</span>
            </div>

        </div>
    )
}

export default HW11
