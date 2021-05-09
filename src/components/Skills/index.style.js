import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	margin-left: 300px;
	margin-top: 7rem;
	margin-bottom: 15rem;
	height: 100vh;
	color: ${props => props.theme.bannerForeground};

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

	#html-css {
		width: 60%;
	}

	#javascript {
		width: 30%;
	}

	#react {
		width: 15%;
	}

	#node {
		width: 5%;
	}

	#express {
		width: 5%;
	}

	#mongodb {
		width: 5%;
	}
`

export const Title = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: center;
	background-color: ${props => props.theme.titleBackground};
	border-radius: 10px;
	margin-bottom: 1rem;

	box-shadow: 3px 3px 6px ${props => props.theme.boxShadowColor};

	@media (max-width: 1200px) {
		font-size: 35px;
	}
`

export const Details = styled.p`
	font-size: 1.25rem;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: justify;
	background-color: ${props => props.theme.containerColor};
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	border-radius: 10px;
	padding: 1rem;

	@media (max-width: 576px) {
		font-size: 1rem;
	}
`

export const Skill = styled.span`
	padding: 10px 0;
	margin: 0;
	text-transform: uppercase;
	display: block;
	font-weight: 600;
	color: white;
`

export const ProgressBarWrap = styled.div`
	/* background: #dce8f8; */
	background-color: #dce8f8;
	height: 1.2rem;
`
export const Value = styled.i`
	float: right;
	font-style: normal;
`
export const Progress = styled.div`
	background-color: ${props => props.theme.containerColor};
	height: 6rem;
	padding: 1rem;
	margin: 0.25rem;
	border-radius: 10px;
`
export const ProgressBar = styled.div`
	height: 1.2rem;
	background: #4398ff;
`
