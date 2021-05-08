import { StyledHeader } from './styles/header'
import ProfilePicture from '../../components/ProfilePicture'
import SocialLinks from '../../components/SocialLinks'
import NavLinks from '../../components/NavLinks'

export default function Header() {
	return (
		<StyledHeader>
			<ProfilePicture />
			<h1>Vilmar Cabanero</h1>
			<SocialLinks />
			<NavLinks />
		</StyledHeader>
	)
}
