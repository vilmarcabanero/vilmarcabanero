import styled from 'styled-components'

export const StyledHeader = styled.div`
	position: fixed;
	width: 300px;
	left: 0;
	top: 0;
	bottom: 0;
	color: white;
	background-color: rgba(0, 0, 0, 0.7);
	box-shadow: 5px 5px 10px gray;
	border-radius: 5px;

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	/* padding: 5rem; */

	@media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	}

	h1 {
		text-align: center;
		font-size: 24px;
	}
`
