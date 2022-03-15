import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
	name: string // need to fix any
	setNameCallback: ( e: ChangeEvent<HTMLInputElement> ) => void // need to fix any
	addUser: () => void // need to fix any
	error: string // need to fix any
	totalUsers: number // need to fix any
	keyEnter: ( e: KeyboardEvent<HTMLInputElement> ) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, keyEnter }, // деструктуризация пропсов
) => {
	const inputClass = s.error // need to fix with (?:)

	const textError = "Error. The field must not be empty!"

	return (
		<div className={ s.greeting }>
			<input value={ name }
			       onChange={ setNameCallback }
			       className={ ( error ) ? inputClass : s.inputClass }
			       onKeyPress={ keyEnter }/>
			<button className={ s.buttonClass } onClick={ addUser }>add</button>
			{ error && <span className={ s.errorText }>{ textError }</span> }
			<span className={ s.numberClass }>{ totalUsers }</span>
		</div>
	)
}

export default Greeting
