import styled from 'styled-components'

export const StyledProfile = styled.img`
	width: 150px;
	height: 150px;
	margin: 15px auto;
	margin-top: 3rem;
	display: block;
	border-radius: 50%;
	box-shadow: 5px 5px 10px gray;
	/* border: 1px solid gray; */
	transition: 1s;

	&:hover {
		transition: 0.5s;
		box-shadow: 2px 2px 4px gray;
	}
`
