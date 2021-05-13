import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;

	.icon {
		margin-top: 8px;
	}
`

export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.1rem;
	color: white;
	display: inline-block;
	background: #212431;
	box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	margin-right: 4px;
	border-radius: 50%;
	text-align: center;
	width: 36px;
	height: 36px;
	transition: all 0.5s ease;

	&:hover {
		background: #149ddd;
		color: #fff;
		text-decoration: none;
		transition: all 0.5s ease;
		box-shadow: 0px 0px 1px ${props => props.theme.boxShadowColor};
	}
`
