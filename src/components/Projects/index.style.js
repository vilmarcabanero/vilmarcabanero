import styled from 'styled-components'

export const Container = styled.div`
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

	.project-container {
		position: relative;
		background-color: ${props => props.theme.containerColorParent};
		padding: 0.5rem;
		padding-bottom: 2rem;
		margin-top: 1rem;
		border-radius: 10px;
		box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	}

	.text-row {
		height: 16rem; //heto hinahanap ko to target the 2 icons. 
		position: relative;
		/* border: 1px white solid; */
	}

	.icon-row {
		height: 4rem; //heto hinahanap ko to target the 2 icons. 
		/* border: 1px white solid; */
		position: relative;
	}

	
`
export const ProjectContainer = styled.div`
	/* background-color: ${props => props.theme.containerColor}; */
	/* box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor}; */
	padding: 1rem;
	margin-top: 0.5rem;
	border-radius: 20px;
	background-color: ${props => props.theme.containerColor}; 
	box-shadow: 1px 2px 3px ${props => props.theme.boxShadowColor};
	height: 100%;

`

export const TextContainer = styled.div`
	/* height: 13.8rem; */
	/* height: 100%; */
	
`

export const Title1 = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: center;
	background-color: ${props => props.theme.titleBackground};
	margin-left: -0.75rem;
	margin-right: -0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.5rem;
	border-radius: 10px;

	box-shadow: 3px 3px 6px ${props => props.theme.boxShadowColor};

	@media (max-width: 1200px) {
		font-size: 35px;
	}
`

export const Title = styled.h2`
	font-size: 35px;
	color: ${props => props.theme.bannerForeground};

	transition: all 1s ease;
	@media (max-width: 1200px) {
		font-size: 27px;
	}
`

export const Description = styled.p`
	font-size: 1.5rem;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	@media (max-width: 1200px) {
		font-size: 1.25rem;
	}

	@media (max-width: 576px) {
		font-size: 1.1rem;
	}
`

export const Image = styled.img`
	/* height: 17rem; */
	height: 100%;
	width: 100%;
	
	border-radius: 20px;
	box-shadow: 1px 2px 3px ${props => props.theme.boxShadowColor};
	@media (max-width: 768px) {
		height: 100%;
	}
`
export const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	color: white;
	background: #212431;
	box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	margin-right: 4px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	transition: 1s;

	position: absolute;
	bottom: 0;
	float: bottom;

	&:hover {
		background: #149ddd;
		color: #fff;
		text-decoration: none;
		transition: 0.5s;
		box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	}

	@media (min-width: 992px) {
		margin-right: 2rem;
		width: 45px;
		height: 45px;
		.icon {
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 576px) {
		width: 40px;
		height: 40px;
		margin-right: 0;

		.icon {
			width: 25px;
			height: 25px;
		}
	}
`
