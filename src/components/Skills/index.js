import {
	Title,
	Details,
	ImageContainer,
	Image,
	SkillContainer,
	Skill,
} from './index.style'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Main from '../../containers/Main'
import html5 from '../../assets/images/logo-html5.png'
import css3 from '../../assets/images/logo-css3.png'
import javascript from '../../assets/images/logo-javascript.png'
import mongodb from '../../assets/images/logo-mongodb.png'
import nodejs from '../../assets/images/logo-nodejs.png'
import expressjs from '../../assets/images/logo-expressjs.png'
import react from '../../assets/images/logo-react.png'
import heroku from '../../assets/images/logo-heroku.png'
import git from '../../assets/images/logo-git.png'
import gitlabcicd from '../../assets/images/logo-gitlab-ci-cd.png'
import rest from '../../assets/images/logo-rest.png'
import postman from '../../assets/images/logo-postman.png'
import bootstrap from '../../assets/images/logo-bootstrap.png'
import materialui from '../../assets/images/logo-material-ui.png'
import vscode from '../../assets/images/logo-vscode.png'
// import sublimetext from '../../assets/images/logo-sublime-text-3.png'


const Skills = () => {
	return (
		<Container>
			<Main>
				<Title>Skills</Title>
				<Details>
					I'm a full stack developer who uses the MERN Stack to develop my web
					apps or websites. My current skill set is as follows:
				</Details>

				<ImageContainer>
					{skills.map(items => {
						return (
							<SkillContainer>
								<Skill id={items.id}>{items.skill}</Skill>
								<Image src={items.src} id={items.imgId} alt={items.alt} />
							</SkillContainer>
						)
					})}
				</ImageContainer>
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
		skill: 'mongodb',
		src: mongodb,
		alt: 'mongodb',
		id: '',
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
		skill: 'react',
		src: react,
		alt: 'react',
		id: '',
		imgId: 'react',
	},
	{
		skill: 'heroku',
		src: heroku,
		alt: 'heroku',
		id: '',
	},
	{
		skill: 'git',
		src: git,
		alt: 'git',
		id: '',
	},
	{
		skill: 'Gitlab CI/CD',
		src: gitlabcicd,
		alt: 'Gitlab CI/CD',
		id: 'gitlab-ci-cd',
		imgId: 'gitlab-ci-cd-img',
	},
	{
		skill: 'rest',
		src: rest,
		alt: 'rest',
		id: '',
	},
	{
		skill: 'postman',
		src: postman,
		alt: 'postman',
		id: '',
	},
	{
		skill: 'bootstrap',
		src: bootstrap,
		alt: 'bootstrap',
		id: '',
	},
	{
		skill: 'material ui',
		src: materialui,
		alt: 'materialui',
		id: '',
	},
	{
		skill: 'VS Code',
		src: vscode,
		alt: 'vscode',
		id: '',
	},
	// {
	// 	skill: 'Sublime Text',
	// 	src: sublimetext,
	// 	alt: 'sublimetext',
	// 	id: 'sublime-text',
	// },

	
]

export default Skills