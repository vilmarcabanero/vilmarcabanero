import styled from 'styled-components'

export const Toggle = styled.button`
	cursor: pointer;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: none;
	background-color: ${props => props.theme.tertiaryColor};
	color: white;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	&:focus {
		outline: none;
	}
	transition: all 0.5s ease;
`

export const Page = styled.div`
	position: relative;
	margin-left: 300px;
	height: 100vh;

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	@media (max-width: 991px) {
		//xl 1199px, 991 lg
		margin-left: 0;
	}
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${props => props.theme.pageBackground};
	transition: all 0.5s ease;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.h1`
	color: ${props => props.theme.titleColor};
	transition: all 0.5s ease;
`

export const TagLine = styled.span`
	color: ${props => props.theme.fontColor};
	font-size: 18px;
	transition: all 0.5s ease;
`
