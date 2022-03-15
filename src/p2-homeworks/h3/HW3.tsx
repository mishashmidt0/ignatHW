import React, { useState } from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
import { v1 } from 'uuid'

// types
export type UserType = {
	_id: string // need to fix any
	name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3 () {
	const [ users, setUsers ] = useState<Array<UserType>> ( [] ) // need to fix any

	const addUserCallback = ( name: string ) => { // need to fix any
		const newUser: UserType = { _id: v1 (), name: name };
		setUsers ( [ newUser, ...users ] ) // need to fix
	}

	return (
		<div className={ s.container }>
			<GreetingContainer users={ users } addUserCallback={ addUserCallback }/>
		</div>
	)
}

export default HW3
