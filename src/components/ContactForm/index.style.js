import styled from 'styled-components'

export const Styled = styled.div`
	.container-row {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
export const Form = styled.form`
	position: relative;
	margin-top: 10rem;
	max-width: 40rem;
	z-index: 20;
	padding: 2rem;
	border-radius: 10px;
	background-color: ${props => props.theme.containerColor};
	transition: all 1s ease;
	color: white;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};

	@media (max-width: 992px) {
		margin-top: 6rem;
	}

	@media (max-width: 768px) {
		padding: 1rem;
		max-width: 100%;
		padding-bottom: 0;
		margin-top: 3;
	}

	@media (max-width: 576px) {
		padding: 1rem;
		max-width: 100%;
		padding-bottom: 0;
		margin-top: 1rem;
	}
`

export const Title = styled.h1`
	font-size: 2rem;
	margin-bottom: 2rem;
	margin-top: 1rem;
	text-align: center;
	cursor: text;
	transition: all 1s ease;
	@media (max-width: 30rem) {
		font-size: 1.75rem;
	}
`

export const InputGroup = styled.label`
	position: relative;
	width: 100%;
	margin-bottom: 0.5rem;
	padding-top: 1rem;
	transition: all 1s ease;
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
	transition: all 1s ease;
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
	transition: all 1s ease;
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
	transition: all 1s ease;
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
	transition: all 1s ease;
	border: 1px solid #06f;
	border-radius: 0.2rem;
	&:hover {
		cursor: pointer;
		background-color: transparent;
	}

	@media (max-width: 576px) {
		margin-bottom: 5rem;
	}

	@media (max-width: 360px) {
		margin-bottom: 7rem;
	}
`

export const Alert = styled.span`
	width: 100%;
	color:  #06f;
	background-color: #fff;
	transition: all 1s ease;
	font-size: 1.1rem;
	border-radius: 10px;
	position: absolute;
	bottom: 0;
	left: 0;
	text-align: center;
	font-weight: 500;

	@media (max-width: 576px) {
		background-color: #fff;
		color:  #06f;
		padding: 0;
		border-radius: 10px;
	}
`
