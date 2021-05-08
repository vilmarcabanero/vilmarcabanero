import { StyledSocialLinks } from './styles/socialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEyeSlash,
	faUser,
	faFile,
	faFileCode,
  faFacebookF
} from '@fortawesome/free-solid-svg-icons'

export default function SocialLinks() {
	return (
		<StyledSocialLinks>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faEyeSlash} />
			</a>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faUser} />
			</a>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faFile} />
			</a>
		</StyledSocialLinks>
	)
}
