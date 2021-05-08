import styled from 'styled-components'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

import {Toggle, Page, Container, Title, TagLine} from './styles/banner'

function Splash(props) {
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
		<Page>
			<Container>
				<Toggle onClick={changeTheme}>{icon}</Toggle>
				<Title>Coding With Chaim</Title>
				<TagLine>Level up your web development skills!</TagLine>
			</Container>
		</Page>
	)
}

export default Splash
