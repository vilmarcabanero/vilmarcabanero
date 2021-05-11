import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particleParams'
import { StyledParticles } from './index.style'

const ParticleBackground = () => {
	return (
		<StyledParticles>
			<Particles className='particles' params={particleParams}></Particles>
		</StyledParticles>
	)
}

export default ParticleBackground
