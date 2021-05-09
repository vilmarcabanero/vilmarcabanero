import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${props => props.theme.bannerBackground};
	//Gumagana ang default, which is darkTheme, pero di na lumilipat to light theme kung hindi ilagay sa app.
	position: relative;
	padding-top: 5rem;
	margin-left: 300px;

	padding: 5rem;

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		margin-left: 0;
		padding: 1rem;
		padding-bottom: 5rem;

		.icon {
			width: 35px;
			height: 35px;
		}
	}
`
export const ProjectContainer = styled.div`
	box-shadow: 5px 5px 10px gray;
	padding: 1rem;
	border-radius: 5px;
`

export const Title1 = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	font-family: 'DM Sans', sans-serif;
	text-align: center;

	@media (max-width: 1200px) {
		font-size: 35px;
	}
`

export const Title = styled.h2`
	font-size: 30px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	font-family: 'DM Sans', sans-serif;

	@media (max-width: 1200px) {
		font-size: 25px;
	}
`

export const Description = styled.p`
	font-size: 20px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	font-family: 'DM Sans', sans-serif;

	@media (max-width: 1200px) {
		font-size: 15px;
	}
`
export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 2rem;
	color: white;
	background: #212431;
	/* border: 1px solid gray; */
	box-shadow: 5px 5px 10px gray;
	margin-right: 4px;
	border-radius: 50%;
	text-align: center;
	width: 50px;
	height: 50px;
	transition: 1s;

	&:hover {
		background: #149ddd;
		color: #fff;
		text-decoration: none;
		transition: 0.5s;
		box-shadow: 1px 1px 2px gray;
	}

	@media (min-width: 992px) {
		margin-right: 2rem;
	}
`
