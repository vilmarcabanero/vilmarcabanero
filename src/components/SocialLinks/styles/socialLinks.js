import styled from 'styled-components'

export const StyledSocialLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 1rem;

	a {

    display: flex;
    justify-content: center;
    align-items: center;

		font-size: 1.1rem;
		color: white;
		display: inline-block;
		background: #212431;
    /* border: 1px solid gray; */
		box-shadow: 3px 3px 6px gray;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
		transition: 1s;

    /* &:nth-child(3) {
      color: white;
    } */

		&:hover {
			background: #149ddd;
			color: #fff;
			text-decoration: none;
      transition: 0.5s;
      box-shadow: 1px 1px 2px gray;
		}
	}

	.icon {
    margin-top: 8px;
	}
`

export const StyledIconLink = styled.a``

// export const StyledIcon = styled()`

// `
