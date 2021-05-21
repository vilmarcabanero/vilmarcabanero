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

					<Title id='tools'>Tools</Title>
					<Details>
						These are the tools I've been using for my development.
					</Details>
					<ImageContainer>
						{tools.map(items => (
							<SkillContainer>
								<Skill id={items.id}>{items.tool}</Skill>
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
		src: 'assets/images/logo-html5.png',
		alt: 'html5',
		id: '',
	},
	{
		skill: 'css3',
		src: 'assets/images/logo-css3.png',
		alt: 'css3',
		id: '',
	},
	{
		skill: 'javascript',
		src: 'assets/images/logo-javascript.png',
		alt: 'javascript',
		id: '',
	},
	{
		skill: 'react',
		src: 'assets/images/logo-react.png',
		alt: 'react',
		id: '',
		imgId: 'react',
	},
	{
		skill: 'nodejs',
		src: 'assets/images/logo-nodejs.png',
		alt: 'nodejs',
		id: '',
		imgId: 'node-js',
	},
	{
		skill: 'expressjs',
		src: 'assets/images/logo-heroku.png',
		alt: 'expressjs',
		id: '',
	},
	{
		skill: 'rest',
		src: 'assets/images/logo-rest.png',
		alt: 'rest',
		id: '',
	},

	{
		skill: 'mongodb',
		src: 'assets/images/logo-mongodb.png',
		alt: 'mongodb',
		id: '',
	},
	{
		skill: 'tailwind css',
		src: 'assets/images/logo-tailwind.svg',
		alt: 'tailwind css',
		id: 'tailwind-css',
	},

	{
		skill: 'material ui',
		src: 'assets/images/logo-material-ui.png',
		alt: 'materialui',
		id: 'material-ui',
	},

	{
		skill: 'bootstrap',
		src: 'assets/images/logo-bootstrap.png',
		alt: 'bootstrap',
		id: '',
	},
]

const tools = [
	{
		tool: 'VS Code',
		src: 'assets/images/logo-vscode.png',
		alt: 'vscode',
		id: '',
	},
	{
		tool: 'postman',
		src: 'assets/images/logo-postman.png',
		alt: 'postman',
		id: '',
	},
	{
		tool: 'git',
		src: 'assets/images/logo-git.png',
		alt: 'git',
		id: '',
	},
	{
		tool: 'github',
		src: 'assets/images/logo-github.png',
		alt: 'github',
		id: '',
	},
	{
		tool: 'Gitlab CI/CD',
		src: 'assets/images/logo-gitlab-ci-cd.png',
		alt: 'Gitlab CI/CD',
		id: 'gitlab-ci-cd',
		imgId: 'gitlab-ci-cd-img',
	},
	{
		tool: 'heroku',
		src: 'assets/images/logo-heroku.png',
		alt: 'heroku',
		id: '',
	},

]

export default Skills
