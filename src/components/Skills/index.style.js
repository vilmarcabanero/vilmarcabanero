import styled from 'styled-components'

export const MyContainer = styled.div`
	//Gumagana ang default, which is darkTheme, pero di na lumilipat to light theme kung hindi ilagay sa app.
	position: relative;
	margin-left: 300px;
	margin-top: 5rem;
	margin-bottom: 5rem;
	/* max-width: 1000px; */

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		margin-left: 0;

		.icon {
			width: 35px;
			height: 35px;
		}
	}

	@media (max-width: 768px) {
		//xl 1200px, 992 lg
		margin-bottom: 10rem;
	}

	@media (max-width: 768px) {
		//xl 1200px, 992 lg
		padding: 1rem;
	}
`

export const Title = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.titleColor};
	transition: all 1s ease;
	text-align: center;
	/* background-color: ${props => props.theme.titleBackground}; */
	border-radius: 10px;
	margin-bottom: 1rem;

	box-shadow: 3px 3px 6px ${props => props.theme.boxShadowColor};

	@media (max-width: 1200px) {
		font-size: 35px;
	}
`
export const Details = styled.p`
	font-size: 1.25rem;
	color: ${props => props.theme.titleColor};
	
	text-align: center;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	transition: all 1s ease;
	border-radius: 10px;
	padding: 1rem;

	@media (max-width: 576px) {
		font-size: 1rem;
	}
`

export const SkillContainer = styled.div`
	transition: all 1s ease;
	text-align: center;
	padding: 1rem;
	padding-top: 1.5rem;
	margin: 0.5rem;
	border-radius: 50%;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	width: 180px;
	height: 180px;

	@media (max-width: 1200px) {
		width: 160px;
		height: 160px;

		#gitlab-ci-cd {
			font-size: 1.1rem;
		}

		#sublime-text {
			font-size: 1.1rem;
		}

		#material-ui {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 576px) {
		width: 120px;
		height: 120px;

		#gitlab-ci-cd {
			font-size: 0.7rem;
		}

		#sublime-text {
			font-size: 0.7rem;
		}

		#material-ui {
			font-size: 0.7rem;
		}
	}
`

export const Skill = styled.span`
	padding: 5px;
	margin: 0;
	border-radius: 10px;
	text-transform: uppercase;
	font-weight: 500;
	color: ${props => props.theme.titleColor};
	font-size: 1.3rem;
	transition: all 1s ease;

	@media (max-width: 1200px) {
		font-size: 1.15;
	}

	@media (max-width: 576px) {
		font-size: 1rem;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	#node-js,
	#react,
	#gitlab-ci-cd-img {
		background-color: rgba(255, 255, 255, 1);
	}
`

export const Image = styled.img`
	background-color: ${props => props.theme.containerColor};
	box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	border-radius: 50%;
	width: 110px;
	height: 110px;
	margin: 5px;

	@media (max-width: 1200px) {
		width: 90px;
		height: 90px;
	}

	@media (max-width: 576px) {
		width: 60px;
		height: 60px;
	}
`
