import {
	Styled,
	Title,
	Details,
	ImageContainer,
	Image,
	SkillContainer,
	Skill,
} from './index.style'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Main from 'containers/Main'
import html5 from 'assets/images/logo-html5.png'
import css3 from 'assets/images/logo-css3.png'
import javascript from 'assets/images/logo-javascript.png'
import react from 'assets/images/logo-react.png'
import nodejs from 'assets/images/logo-nodejs.png'
import expressjs from 'assets/images/logo-heroku.png'
import rest from 'assets/images/logo-rest.png'
import mongodb from 'assets/images/logo-mongodb.png'
import tailwind from 'assets/images/logo-tailwind.svg'
import material from 'assets/images/logo-material-ui.png'

const Skills = () => {
	return (
		<Container>
			<Main>
				<Styled>
					<Title>Skills</Title>
					<Details>
						I'm a full stack developer who uses the MERN Stack to develop my web
						apps or websites. My current skill set is as follows:
					</Details>

					<ImageContainer>
						{skills.map(items => (
							<SkillContainer>
								<Skill id={items.id}>{items.skill}</Skill>
								<Image src={items.src} id={items.imgId} alt={items.alt} />
							</SkillContainer>
						))}
					</ImageContainer>
				</Styled>
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
		skill: 'react',
		src: react,
		alt: 'react',
		id: '',
		imgId: 'react',
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
		skill: 'rest',
		src: rest,
		alt: 'rest',
		id: '',
	},

	{
		skill: 'mongodb',
		src: mongodb,
		alt: 'mongodb',
		id: '',
	},
	{
		skill: 'tailwind css',
		src: tailwind,
		alt: 'tailwind css',
		id: 'tailwind-css',
	},

	{
		skill: 'material ui',
		src: material,
		alt: 'materialui',
		id: 'material-ui',
	},
]

export default Skills
