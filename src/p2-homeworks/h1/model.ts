import { data } from "./data/data";
import { queries } from "@testing-library/react";


export type forMaessegeData = {
	avatar?: string,
	name?: string,
	message?: string,
	time?: string,
}


function randomNumber ( max: number ) {
	let number = Math.floor ( Math.random () * max );
	let el = null;
	if ( number <= 9 ) {
		el = '1' + number;
		return +el
	}
	return number
}

export function model () {
	const button = document.querySelector ( '.button' ) as HTMLElement;
	const messagesContainer = document.querySelector ( '.messages-container' ) as HTMLElement;
	const message = document.getElementById ( 'textForm' ) as HTMLElement;
	const input = document.querySelector ( '.submit' ) as HTMLElement;



	button.addEventListener ( 'click',
		() => {

			let dataNow = new Date ();
			let hours: number | string = dataNow.getHours ();
			let minets: number | string = dataNow.getMinutes ();

			if ( minets < 10 ) minets = '0' + minets;
			if ( hours < 10 ) hours = '0' + hours;

			const time: string = `${ hours }:${ minets }`

			const messageData: forMaessegeData = {
				avatar: `https://cspromogame.ru//storage/upload_images/avatars/39${ randomNumber ( 30 ) }.jpg`,
				name: `${ data[ Math.floor ( Math.random () * 10 ) ].name }`,
				message: 'some text',
				time: `${ time }`,
			};
			const massege = view ( messageData ) as HTMLElement
			messagesContainer.append ( massege )

		} )

}


function view ( props: forMaessegeData ) {
	const box = document.createElement ( 'div' )
	box.className = 'box'
	const avatar = document.createElement ( 'img' );
	const message = document.createElement ( 'p' );
	const name = document.createElement ( 'p' );
	const time = document.createElement ( 'p' );
	box.append ( name, message, time )

	const container = document.createElement ( 'div' ) as HTMLElement
	container.className = 'messagers'

	message.className = `message`;
	name.className = `name`;
	time.className = `time`;

	avatar.src = `${ props.avatar }`;
	message.innerText = `${ props.message }`;
	name.innerText = `${ props.name }`;
	time.innerText = `${ props.time }`;
	container.append ( avatar, box )
	return container;

}

