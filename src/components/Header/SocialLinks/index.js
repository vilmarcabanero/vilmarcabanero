import * as S from './index.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faFacebookF,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Index = () => {
	return (
		<S.Container>
			{links.map(items => (
				<S.Link href={items.href} target='_blank' rel='noreferrer'>
					<FontAwesomeIcon className='icon' icon={items.icon} />
				</S.Link>
			))}
		</S.Container>
	)
}

const links = [
	{
		href: 'https://www.facebook.com/vilmarcabanero',
		icon: faFacebookF,
	},
	{
		href: 'https://www.linkedin.com/in/vilmarcabanero/',
		icon: faLinkedin,
	},
	{
		href: 'https://github.com/vilmarcabanero',
		icon: faGithub,
	},
]

export default Index
