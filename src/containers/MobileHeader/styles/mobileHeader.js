import styled from 'styled-components'

export const StyledHeader = styled.div`
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	color: white;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 1);
	box-shadow: 5px -5px 10px gray;
	border-radius: 5px;

	

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	/* padding: 5rem; */

	@media (min-width: 991px) {
		//xl 1199px, 991px lg
		display: none;
	}

	h1 {
		text-align: center;
		font-size: 24px;
	}
`
