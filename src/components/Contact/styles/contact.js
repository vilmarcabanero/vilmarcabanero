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

	padding-left: 10rem;
	padding-right: 10rem;

	transition: all ease-in-out 0.5s;
	transition: all 1s;

	@media (max-width: 1200px) {
		//xl 1200px, 992 lg
		padding-left: 7rem;
		padding-right: 7rem;
	}

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		margin-left: 0;
		padding-left: 5rem;
		padding-right: 5rem;
	}

	@media (max-width: 576px) {
		margin-left: 0;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	/* background-color: ${props => props.theme.bannerBackground}; */

	////::after
`
export const Styled = styled.div`
	position: relative;
	top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 20;

	width: 28rem;
	border-radius: 5px;

	padding: 4rem 3rem 5rem 3rem;

	background-color: rgba(0, 0, 0, 0.4);
	color: white;

	@media (max-width: 30rem) {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin: 0rem 0;
		padding-top: 0rem;
		background-color: transparent;
	}

	//begin
	h1 {
		font-size: 2rem;
		margin-left: 0.5rem;
		/* margin-bottom: 1.75rem; */
		margin-bottom: 3rem;
		align-self: flex-start;
		cursor: text;
		@media (max-width: 30rem) {
			font-size: 1.75rem;
			padding-left: 0.5rem;
			margin: 0 0 0.5rem 0;
		}
	}
	.custom-input {
		position: relative;
		width: 100%;
		margin-bottom: 0.5rem;
		padding-top: 1rem;
		&:hover {
			cursor: text;
		}

		.email, .name, .textarea {
			border-radius: 5px;
		}
/* 
		.password {
			border-radius: 5px;
			margin-bottom: 1rem;
		} */

		input {
			font-size: 1rem;
			width: 100%;
			/* border-radius: 5px; */
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
				color: lightgray;
			}
		}

		.placeholder {
			font-size: 1rem;
			position: absolute;
			left: 0.5rem;
			top: 1.3rem;
			color: #aaa;
			transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
			cursor: text;
		}
	}

	.flex {
		display: flex;
		position: relative;
		width: 100%;
	}

	.password-container {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;

		.visibility {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0rem 0.5rem 1.1rem 1rem;

			position: absolute;
			width: 1rem;
			color: gray;
			opacity: 1.5;
			right: 0rem;
			bottom: 0.6rem;
			cursor: pointer;
			z-index: 20;

			&:hover {
				opacity: 0.75;
			}
		}
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		height: 2.75rem;
		width: 100%;
		color: white;
		margin-right: auto;
		margin-left: auto;
		margin-top: 1rem;
		font-size: 1.2rem;
		background-color: #06f;
		border: 1px solid #06f;
		border-radius: 0.2rem;
		&:hover {
			font-size: 1.2rem;
			cursor: pointer;
			background-color: transparent;
		}
	}

	//End

	textarea {
		font-size: 1rem;
		width: 100%;
		/* border-radius: 5px; */
		color: white;
		border-bottom: 1px solid gainsboro;
		height: 6rem;
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
	}

	.placeholder {
		font-size: 1rem;
		position: absolute;
		left: 0.5rem;
		top: 1.3rem;
		color: #aaa;
		transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
		cursor: text;
	}

`
