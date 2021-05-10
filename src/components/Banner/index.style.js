import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	margin-left: 300px;
	/* height: 100vh; */
	margin-top: 20rem;
	
	/* transform: translateY(130%); */

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
		/* transform: translateY(125%); */
	}

	@media (max-width: 1020px) {
		//xl 1200px, 992 lg
		padding-left: 7rem;
		padding-right: 7rem;
		/* transform: translateY(90%); */
	}

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		margin-left: 0;
		padding-left: 5rem;
		padding-right: 5rem;
		/* transform: translateY(75%); */
		margin-top: 15rem;
	}

	@media (max-width: 576px) {
		margin-left: 0;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-top: 10rem;
		/* transform: translateY(50%); */
	}

`

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	padding: 2rem;
	border-radius: 10px;
`

export const Name = styled.h1`
	font-size: 3rem;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: center;

	@media (max-width: 576px) {
		font-size: 2rem;
	}
`

export const Details = styled.h3`
	font-size: 1.75rem;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: center;

	@media (max-width: 576px) {
		font-size: 1.25rem;
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
