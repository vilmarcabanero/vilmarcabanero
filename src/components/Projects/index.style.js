import styled from 'styled-components'

export const MyContainer = styled.div`
	//Gumagana ang default, which is darkTheme, pero di na lumilipat to light theme kung hindi ilagay sa app.
	position: relative;
	margin-left: 300px;
	margin-top: 5rem;
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

	.card-col {
		margin-bottom: 1rem;
	}

	.card {
		height: 100%;
		padding: 1rem;
		padding-bottom: 1.5rem;
		margin-top: 0.5rem;

		border-radius: 5px;
		background-color: ${props => props.theme.containerColor};
		color: ${props => props.theme.bannerForeground};
		box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};

		@media (max-width: 1200px) {
			padding-bottom: 3rem;
		}

		@media (max-width: 992px) {
			padding-bottom: 3.5rem;
		}

		@media (max-width: 768px) {
			padding-bottom: 4.5rem;
		}

		@media (max-width: 576px) {
			padding-bottom: 3.75rem;
		}

		.card-img {
			border-radius: 5px;
		}

		.card-title {
			font-size: 35px;
			font-family: 'DM Mono', monospace;

			transition: all 1s ease;
			@media (max-width: 1200px) {
				font-size: 27px;
			}
		}

		.card-text {
			font-size: 1.5rem;
			font-family: 'DM Sans', sans-serif;
			height: 70%;

			transition: all 1s ease;
			@media (max-width: 1200px) {
				font-size: 1.25rem;
				height: 80%;
			}

			@media (max-width: 576px) {
				font-size: 1.1rem;
			}
		}
	}
`

export const Title = styled.h1`
	font-size: 45px;
	color: ${props => props.theme.bannerForeground};
	transition: all 1s ease;
	text-align: center;
	/* background-color: ${props => props.theme.titleBackground}; */
	margin-left: -0.75rem;
	margin-right: -0.75rem;
	padding-top: 0.25rem;
	padding-bottom: 0.5rem;
	border-radius: 5px;

	box-shadow: 3px 3px 6px ${props => props.theme.boxShadowColor};

	@media (max-width: 1200px) {
		font-size: 35px;
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
		bottom: 0rem;

		.icon {
			width: 25px;
			height: 25px;
		}
	}
`
