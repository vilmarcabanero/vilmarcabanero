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

	background-color: ${props => props.theme.bannerBackground};

`

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Name = styled.h1`
	font-size: 50px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	font-family: 'DM Mono', monospace;
	text-align: center;
`

export const Details = styled.h3`
	font-size: 30px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	font-family: 'DM Sans', sans-serif;
	text-align: center;
`
