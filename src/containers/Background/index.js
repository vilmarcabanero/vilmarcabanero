import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../../helpers/theme'
import ParticleBackground from '../../components/Particles'
import { Toggle } from './styles/background'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

export default function Background(props) {
	function changeTheme() {
		if (props.theme === 'light') {
			props.setTheme('dark')
		} else {
			props.setTheme('light')
		}
	}
	const icon =
		props.theme === 'light' ? <CgSun className='toggle' /> : <HiMoon className='toggle' />

	return (
		<div>
			<ParticleBackground />
			<Toggle onClick={changeTheme}>{icon}</Toggle>
		</div>
	)
}
