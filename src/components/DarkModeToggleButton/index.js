import {StyledDarkModeToggleButton} from './styles/darkModeToggleButton'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const DarkModeToggleButton = (props) => {
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
    <StyledDarkModeToggleButton onClick={changeTheme}>
      {icon}
    </StyledDarkModeToggleButton>
  )
}

export default DarkModeToggleButton
