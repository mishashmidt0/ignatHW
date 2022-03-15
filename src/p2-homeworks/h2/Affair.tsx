import React from 'react'
import s from './Affairs.module.css'


type AffairPropsType = {
	deleteAffairCallback: ( id: number ) => void
	name: string;
	priority: string;
	id: number;
}

function Affair ( props: AffairPropsType ) {
	const deleteCallback = ( id: number ): any => {
		props.deleteAffairCallback ( id )
	}

	return (
		<div>
			<div className={ s.block }>
				<p className={ s.name }>{ props.name }</p>
				<p className={ s.priority }>{ props.priority }</p>
				<button className={ s.button } onClick={ () => deleteCallback ( props.id ) }>close</button>
			</div>
		</div>
	)
}

export default Affair
