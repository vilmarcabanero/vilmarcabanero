import styled from 'styled-components'

export const StyledNavLinks = styled.div`
	padding-left: 2rem;
	margin-top: 2rem;

	a {
		text-decoration: none;
		display: grid;
    grid-template-columns: 10% auto auto;
		align-items: center;
		justify-content: flex-start;
		padding: 1rem;
		transition: 1s;

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
		padding-left: 0.8rem;

		&:hover {
			color: white;
		}
	}
`
