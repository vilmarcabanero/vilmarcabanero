import { StyledMain } from './styles/main'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

export default function Main(props) {
	function changeTheme() {
		if (props.theme === 'light') {
			props.setTheme('dark')
		} else {
			props.setTheme('light')
		}
	}

	const icon =
		props.theme === 'light' ? <CgSun size={40} /> : <HiMoon size={40} />


	return (
		<StyledMain>
			<button onClick={changeTheme}> {icon} </button>
		</StyledMain>
	)
}
