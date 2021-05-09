import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	margin-left: 300px;
	width: inherit;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	transition: all ease-in-out 0.5s;
	transition: all 1s;

	

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		margin-left: 0;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
export const Form = styled.form`
	position: relative;

	z-index: 20;
	padding: 3rem;

	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};

	@media (max-width: 576px) {
		padding: 1rem;
		background-color: transparent;
	}
`

export const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 1rem;
	margin-top: 1rem;
	text-align: center;
	cursor: text;
	@media (max-width: 30rem) {
		font-size: 1.75rem;
	}
`

export const InputGroup = styled.label`
	position: relative;
	width: 100%;
	margin-bottom: 0.5rem;
	padding-top: 1rem;
	&:hover {
		cursor: text;
	}
`

export const Input = styled.input`
	border-radius: 5px;
	font-size: 1rem;
	width: 100%;
	color: white;
	border-bottom: 1px solid gainsboro;
	height: 2rem;
	padding-left: 0.5rem;
	background-color: transparent;
	outline: none;
	border-top: none;
	border-left: none;
	border-right: none;

	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}

	&:valid + .placeholder,
	&:focus + .placeholder {
		top: 0px;
		font-size: 0.75rem;
		color: lightGray;
	}
`

export const Placeholder = styled.span`
	font-size: 1rem;
	position: absolute;
	left: 0.5rem;
	top: 1.3rem;
	color: #aaa;
	transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
	cursor: text;
`

export const TextArea = styled.textarea`
	border-radius: 5px;
	font-size: 1rem;
	width: 100%;
	color: white;
	border-bottom: 1px solid gainsboro;
	height: 5rem;
	padding-left: 0.5rem;
	background-color: transparent;
	outline: none;
	border-top: none;
	border-left: none;
	border-right: none;

	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}

	&:valid + .placeholder,
	&:focus + .placeholder {
		top: 0px;
		font-size: 0.75rem;
		color: lightGray;
	}
`

export const Button = styled.button`
	height: 2.75rem;
	color: white;
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 3rem;
	font-size: 1.2rem;
	background-color: #06f;
	border: 1px solid #06f;
	border-radius: 0.2rem;
	&:hover {
		cursor: pointer;
		background-color: transparent;
	}

	@media (max-width: 576px) {
		margin-bottom: 5rem;
	}
`

export const Alert = styled.span`
	width: 100%;
	color: steelblue;
	background-color: white;
	font-size: 1.1rem;
	border-radius: 0 0 5px 5px;
	padding: 4px 8px;
	position: absolute;
	
	bottom: 0;
	left: 0;
	text-align: center;
	font-weight: 500;

	@media (max-width: 576px) {
		background-color: transparent;
		color: white;
		padding: 0;
		box-shadow: 3px 3px 6px gray;
		border-radius: 10px;
	}
`
