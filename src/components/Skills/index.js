import * as S from './index.style'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Main from 'containers/Main'
import html5 from 'assets/images/logo-html5.png'
import css3 from 'assets/images/logo-css3.png'
import javascript from 'assets/images/logo-javascript.png'
import typescript from 'assets/images/logo-ts.png'
import react from 'assets/images/logo-react.png'
import nodejs from 'assets/images/logo-nodejs.png'
import expressjs from 'assets/images/logo-heroku.png'
import mongodb from 'assets/images/logo-mongodb.png'
import reactnative from 'assets/images/logo-react-native.png'
import material from 'assets/images/logo-material-ui.png'

const Index = () => {
	return (
		<Container>
			<Main>
				<S.Styled>
					<S.Title>Skill Set</S.Title>
					<S.Details>
						I'm a full stack developer who uses the MERN Stack to develop my web
						apps or websites. My current skill set is as follows:
					</S.Details>

					<S.ImageContainer>
						{skills.map(items => (
							<S.SkillContainer>
								<S.Skill id={items.id}>{items.skill}</S.Skill>
								<S.Image src={items.src} id={items.imgId} alt={items.alt} />
							</S.SkillContainer>
						))}
					</S.ImageContainer>
				</S.Styled>
			</Main>
		</Container>
	)
}

const skills = [
	{
		skill: 'html5',
		src: html5,
		alt: 'html5',
		id: '',
	},
	{
		skill: 'css3',
		src: css3,
		alt: 'css3',
		id: '',
	},
	{
		skill: 'javascript',
		src: javascript,
		alt: 'javascript',
		id: '',
	},
	{
		skill: 'typescript',
		src: typescript,
		alt: 'typescript',
		imgId: 'typescript',
	},
	{
		skill: 'react',
		src: react,
		alt: 'react',
		id: '',
		imgId: 'react',
	},
	{
		skill: 'React Native',
		src: reactnative,
		alt: 'reactnative',
		id: 'react-native-skill',
		imgId: 'react-native',
	},
	{
		skill: 'nodejs',
		src: nodejs,
		alt: 'nodejs',
		id: '',
		imgId: 'node-js',
	},
	{
		skill: 'expressjs',
		src: expressjs,
		alt: 'expressjs',
		id: '',
	},

	{
		skill: 'mongodb',
		src: mongodb,
		alt: 'mongodb',
		id: '',
	},
	{
		skill: 'material ui',
		src: material,
		alt: 'materialui',
		id: 'material-ui',
	},
]

export default Index
