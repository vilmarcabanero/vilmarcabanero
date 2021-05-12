import ParticleBackground from '../../components/Particles'
import { Toggle } from './index.style'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const Background = props => {
	function changeTheme() {
		if (props.theme === 'light') {
			props.setTheme('dark')
		} else if(props.theme === 'dark') {
			props.setTheme('light')
		}
	}
	const icon =
		props.theme === 'light' ? (
			<CgSun className='toggle' />
		) : (
			<HiMoon className='toggle' />
		)

	return (
		<div>
			<ParticleBackground />
			<Toggle onClick={changeTheme}>{icon}</Toggle>
		</div>
	)
}

export default Background
