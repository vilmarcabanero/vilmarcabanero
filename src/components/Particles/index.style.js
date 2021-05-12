import styled from 'styled-components'

export const StyledParticles = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	/* background-color: ${props => props.theme.particleColor}; */
	/* background-color: ${theme => theme.particleColor}; */
	/* background-color: rgba(52, 52, 52, 1); */
	background: ${({ theme }) => theme.particleColor};

	.particles {
		width: 100%;
		height: 100vh;
	}
`
