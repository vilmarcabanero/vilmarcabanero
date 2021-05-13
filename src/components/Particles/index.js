import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particleParams'
import particleParamsLightMode from './particleParamsLightMode'
import { StyledParticles } from './index.style'

const ParticleBackground = props => {
	return (
		<StyledParticles theme={props.theme}>
			<Particles
				className='particles'
				params={
					props.theme === 'dark' ? particleParams : particleParamsLightMode
				}
			></Particles>
		</StyledParticles>
	)
}

export default ParticleBackground
