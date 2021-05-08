import {StyledHeader} from './styles/header'
import ProfilePicture from '../../components/ProfilePicture'
import SocialLinks from '../../components/SocialLinks'

export default function Header() {
	return (
		<StyledHeader>
      <ProfilePicture/>
      <SocialLinks/>
			<h1>Hello</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
				aspernatur porro iste est tenetur saepe voluptatum, laboriosam eveniet?
				Repellendus maxime libero error at aspernatur nisi, fugit vitae saepe
				aut.
			</p>
		</StyledHeader>
	)
}
