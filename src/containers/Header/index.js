import { Container } from './index.style'
import ProfilePicture from '../../components/ProfilePicture'
import SocialLinks from '../../components/SocialLinks'
import NavLinks from '../../components/NavLinks'

export default function Header() {
	
	return (
		<Container>
			<ProfilePicture />
			<h1>Vilmar Cabañero</h1>
			<SocialLinks />
			<NavLinks />
		</Container>
	)
}
