import { Container, Name } from './index.style'
import ProfilePicture from '../../components/Header/ProfilePicture'
import SocialLinks from '../../components/Header/SocialLinks'
import NavLinks from '../../components/Header/NavLinks'

const Header = () => {
	return (
		<Container>
			<ProfilePicture />
			<Name>Vilmar Cabañero</Name>
			<SocialLinks />
			<NavLinks />
		</Container>
	)
}

export default Header
