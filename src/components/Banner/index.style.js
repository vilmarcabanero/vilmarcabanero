import styled from 'styled-components'

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${props => props.theme.titleColor};
	background-color: transparent;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	padding: 2rem;
	border-radius: 10px;

	margin-top: 30vh;

	@media (max-width: 992px) {
		margin-top: 26vh;
	}

	@media (max-width: 768px) {
		margin-top: 23vh;
		padding: 1rem;
	}

	@media (max-width: 576px) {
		margin-top: 20vh;
		padding: 1rem;
	}
`

export const Name = styled.h1`
	font-size: 3rem;
	color: ${props => props.theme.titleColor};
	transition: all 1s ease;
	text-align: center;

	@media (max-width: 576px) {
		font-size: 1.75rem;
	}
`

export const Details = styled.h3`
	font-size: 1.75rem;
	color: ${props => props.theme.titleColor};
	transition: all 1s ease;
	text-align: center;

	@media (max-width: 576px) {
		font-size: 1.2rem;
	}
`

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 2rem;
	color: white;
	background: #212431;
	box-shadow: 3px 3px 6px ${props => props.theme.boxShadowColor};
	margin-right: 2rem;
	margin-top: 1.5rem;
	border-radius: 50%;
	text-align: center;
	width: 50px;
	height: 50px;

	transition: 1s;

	@media (max-width: 576px) {
		width: 40px;
		height: 40px;
		font-size: 1.2rem;
		margin-right: 1rem;
	}

	&:hover {
		background: #149ddd;
		color: #fff;
		text-decoration: none;
		transition: 0.5s;
		box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	}
`
