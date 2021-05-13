import styled from 'styled-components'

export const Styled = styled.div`
	#tools {
		margin-top: 5rem;
	}
`

export const Title = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.titleColor};
	transition: all 0.5s ease;
	text-align: center;

	border-radius: 10px;
	margin-bottom: 1rem;

	/* box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor}; */

	@media (max-width: 1200px) {
		font-size: 35px;
	}
`
export const Details = styled.p`
	font-size: 1.25rem;
	color: ${props => props.theme.titleColor};
	margin-left: 4rem;
	margin-right: 4rem;
	text-align: center;
	/* background-color: ${props => props.theme.containerColorLighter}; */
	background-color: ${props => props.theme.transparentContainer};
	box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	transition: all 0.5s ease;
	border-radius: 10px;
	padding: 1rem;

	@media (max-width: 1200px) {
		margin-left: 4.5rem;
		margin-right: 4.5rem;
	}

	@media (max-width: 992px) {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}

	@media (max-width: 576px) {
		font-size: 1rem;
	}
`

export const SkillContainer = styled.div`
	transition: all 0.5s ease;
	text-align: center;
	padding: 1rem;
	margin: 0.5rem;
	/* border-radius: 50%; */
	border-radius: 10px;
	/* background-color: ${props => props.theme.containerColorLighter}; */
	background-color: ${props => props.theme.transparentContainer};
	box-shadow: 1.5px 1.5px 3px ${props => props.theme.boxShadowColor};
	width: 160px;
	height: 160px;

	#gitlab-ci-cd {
		font-size: 1.1rem;
	}
	#material-ui {
		font-size: 1.2rem;
	}

	@media (max-width: 1200px) {
		width: 150px;
		height: 150px;

		#gitlab-ci-cd {
			font-size: 1rem;
		}

		#sublime-text {
			font-size: 1.1rem;
		}

		#material-ui {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 768px) {
		width: 130px;
		height: 130px;
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
	transition: all 0.5s ease;

	@media (max-width: 1200px) {
		font-size: 1.15rem;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
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
	/* background-color: ${props => props.theme.skillImageColor}; */
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	border-radius: 50%;
	width: 80px;
	height: 80px;
	margin: 5px;
	margin-top: 15px;

	@media (max-width: 1200px) {
		width: 70px;
		height: 70px;
	}

	@media (max-width: 768px) {
		width: 60px;
		height: 60px;
	}

	@media (max-width: 576px) {
		width: 55px;
		height: 55px;
	}
`
