import React from 'react'
import Affair from './Affair'
import { AffairType, forDefaultAffairs } from './HW2'
import s from './Affairs.module.css'


type AffairsPropsType = {
	data: forDefaultAffairs,
	setFilter: any,
	deleteAffairCallback: ( id: number ) => void,
}

function Affairs ( props: AffairsPropsType ) {
	const mappedAffairs = props.data.map ( ( a: AffairType ) => (
		<Affair
			key={ a._id }
			deleteAffairCallback={ props.deleteAffairCallback }
			name={ a.name }
			priority={ a.priority }
			id={ a._id }
		/>
	) )

	const setAll = () => {
		props.setFilter ( 'all' )
	}
	const setHigh = () => {
		props.setFilter ( 'high' )
	}
	const setMiddle = () => {
		props.setFilter ( 'middle' )
	}
	const setLow = () => {
		props.setFilter ( 'low' )
	}

	return (
		<div className={ s.affairs_container }>

			{/*отрисовываем с помощью map*/}
			{ mappedAffairs }

			<div className={ s.button_container }>
				<button className={ s.button } onClick={ setAll }>All</button>
				<button className={ s.button } onClick={ setHigh }>High</button>
				<button className={ s.button } onClick={ setMiddle }>Middle</button>
				<button className={ s.button } onClick={ setLow }>Low</button>
			</div>
		</div>
	)
}

export default Affairs
