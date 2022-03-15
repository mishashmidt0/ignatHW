import React from 'react'
import { forMaessegeData } from "./model";


function Message ( props: forMaessegeData ) {
	return (
		<div className="messagers">
			<img  className='img' src={ props.avatar } alt="avatar"/>
			<div className="box">
				<p className="name">{ props.name }</p>
				<p className="message">{ props.message }</p>
				<p className="time">{ props.time }</p>
			</div>
		</div>
	)

}

export default Message
