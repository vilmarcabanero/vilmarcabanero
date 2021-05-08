import { StyledSocialLinks } from './styles/socialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faFacebookF,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
	return (
		<StyledSocialLinks>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faFacebookF} />
			</a>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faTwitter} />
			</a>
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faGithub} />
			</a>
		</StyledSocialLinks>
	)
}
