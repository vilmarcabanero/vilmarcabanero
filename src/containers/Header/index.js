import { Container, Name } from './index.style'
import ProfilePicture from '../../components/ProfilePicture'
import SocialLinks from '../../components/SocialLinks'
import NavLinks from '../../components/NavLinks'

export default function Header() {
	
	return (
		<Container>
			<ProfilePicture />
			<Name>Vilmar Cabañero</Name>
			<SocialLinks />
			<NavLinks />
		</Container>
	)
}
