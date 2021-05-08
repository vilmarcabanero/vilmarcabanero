import styled from 'styled-components'

export const StyledMain = styled.div`
	position: relative;
	margin-left: 300px;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;


	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	h1 {
		margin: 0;
		color: #fff;
	}

	@media (max-width: 991px) {
		//xl 1199px, 991 lg
		margin-left: 0;
	}
	
	background-color: ${props => props.theme.pageBackground};
	transition: all 0.5s ease;

	button {
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
	}
`
