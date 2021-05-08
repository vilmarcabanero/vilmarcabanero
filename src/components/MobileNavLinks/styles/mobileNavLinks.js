import styled from 'styled-components'

export const StyledMobileNavLinks = styled.div`
	padding: 0;

	background-color: ${props => props.theme.headerBackground};
	box-shadow: 5px -5px 10px ${props => props.theme.boxShadowColor};
	border-radius: 5px;

	.col {
		padding: 0;
	}
	a {
		text-decoration: none;
		transition: 1s;
		padding: 0.75rem 1.5rem 0.45rem 1rem;

		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 620px) {
			flex-direction: column;
			padding: 0.5rem 0.2rem 0.2rem 0.2rem;
			span {
				font-size: 0.825rem;
				padding-left: 0;
			}
		}

		&:hover {
			span {
				color: white;
				transition: 0.5s;
			}
			.icon {
				color: #149ddd;
				transition: 0.5s;
			}
		}

		& > span::after {
			position: relative;
			content: '';
			display: block;
			width: 0;
			height: 3px;
			background: #149ddd;
			transition: width 0.4s;
			bottom: 0rem;
		}

		&:hover > span::after {
			width: 100%;
			transition: width 0.4s;
		}
	}

	.icon {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.5rem;
	}

	span {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1rem;
		padding-left: 1rem;
		&:hover {
			color: white;
		}
	}
`
