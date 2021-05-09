import {StyledDarkModeToggleButton} from './index.style'
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
  props.theme === 'light' ? <CgSun /> : <HiMoon />

  return (
    <StyledDarkModeToggleButton onClick={changeTheme}>
      {icon}
    </StyledDarkModeToggleButton>
  )
}

export default DarkModeToggleButton
