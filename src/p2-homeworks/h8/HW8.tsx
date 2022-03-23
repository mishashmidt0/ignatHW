import React, {useState} from 'react'
import {homeWorkReducer, stateType} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {HW8ClearFunction} from "./HW8ClearFunction";


function HW8() {

    const initialPeople = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]

    const [people, setPeople] = useState<stateType>(initialPeople)

    const sortUp = () => setPeople(homeWorkReducer(people, {type: 'sort', payload: 'up'}))


    const sortDown = () => setPeople(homeWorkReducer(people, {type: 'sort', payload: 'down'}))


    const chek18 = () => setPeople(homeWorkReducer(people, {type: 'check', payload: 18}))


    return <HW8ClearFunction people={people} sortUp={sortUp} sortDown={sortDown} chek={chek18}/>
}

export default HW8
