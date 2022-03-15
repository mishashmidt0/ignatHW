import React from 'react'
import Message from "./Message";
import { forMaessegeData, model } from "./model";
import './style.css'


const messageData: forMaessegeData = {
	avatar: `https://cspromogame.ru//storage/upload_images/avatars/3941.jpg`,
	name: `Misha`,
	message: 'Hello, welcome to my link ',
	time: `22:00`,
};

function HW1 () {
	return (
		<div className="main">
			<div className="messages-container">
				<Message
					avatar={ messageData.avatar }
					name={ messageData.name }
					message={ messageData.message }
					time={ messageData.time }/>
			</div>


			{/*<hr/>*/ }
			{/*для личного творчества, могу проверить*/ }
			{/*<AlternativeMessage/>*/ }
			{/*<hr/>*/ }

			{ window.onload = function () {
				model ();
			} }

			<div>
				<div className="textForm">
					<form className="form" action="" onSubmit={ () => false }>
						<textarea name="textForm" id="textForm" cols={ 30 } rows={ 3 } placeholder={ 'write a message' }>
						</textarea>
						<button className="button" type="button">send</button>
					</form>
				</div>
			</div>

		</div>


	)
}

export default HW1
