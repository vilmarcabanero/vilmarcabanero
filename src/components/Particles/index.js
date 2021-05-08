import React from 'react'
import Particles from 'react-particles-js'
import particleParams from './particleParams'
import { StyledParticles } from './styles/particles'

export default function ParticleBackground() {
	return (
		<StyledParticles>
			<Particles className='particles' params={particleParams}></Particles>
		</StyledParticles>
	)
}
