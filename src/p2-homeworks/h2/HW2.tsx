import React, { useState } from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle';
export type FilterType = 'all' | AffairPriorityType;
export type AffairType = {
	_id: number,
	name: string,
	priority: AffairPriorityType,
}
export type forDefaultAffairs = Array<AffairType>;

// constants
const defaultAffairs: forDefaultAffairs = [
	{ _id: 1, name: 'React', priority: 'high' },
	{ _id: 2, name: 'anime', priority: 'low' },
	{ _id: 3, name: 'games', priority: 'low' },
	{ _id: 4, name: 'work', priority: 'high' },
	{ _id: 5, name: 'html & css', priority: 'middle' },
]


export const filterAffairs = ( affairs: forDefaultAffairs, filter: FilterType ): forDefaultAffairs => {
	if ( filter === 'high' ) {
		return affairs.filter ( ( el ) => el.priority === 'high' )
	}
	if ( filter === 'low' ) {
		return affairs.filter ( ( el ) => el.priority === 'low' )
	}
	if ( filter === 'middle' ) {
		return affairs.filter ( ( el ) => el.priority === 'middle' )
	}
	return affairs
}

export const deleteAffair = ( affairs: forDefaultAffairs, _id: number ): forDefaultAffairs => {
	return affairs.filter ( ( el ) => el._id !== _id )
}

function HW2 () {
	const [ affairs, setAffairs ] = useState<forDefaultAffairs> ( defaultAffairs ) // need to fix any
	const [ filter, setFilter ] = useState<FilterType> ( 'all' )

	const filteredAffairs: forDefaultAffairs = filterAffairs ( affairs, filter )
	const deleteAffairCallback = ( _id: number ) => setAffairs ( deleteAffair ( affairs, _id ) ) // need to fix any

	return (
		<div className={ s.hw2 }>

			<Affairs
				data={ filteredAffairs }
				setFilter={ setFilter }
				deleteAffairCallback={ deleteAffairCallback }/>

		</div>
	)
}

export default HW2
