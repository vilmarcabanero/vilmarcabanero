import {
	MyContainer,
	Title,
	Details,
	ImageContainer,
	Image,
	SkillContainer,
	Skill,
} from './index.style'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
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

export default function About() {
	return (
		<Container>
			<MyContainer>
				<Row>
					<Title>Skills</Title>
					<Details>
						I'm a full stack developer who uses the MERN Stack to develop my web
						apps or websites. My current skill set is as follows:
					</Details>

					<ImageContainer>
						<SkillContainer>
							<Skill>CSS3</Skill>
							<Image src={css3} alt='css3' />
						</SkillContainer>

						<SkillContainer>
							<Skill>javascript</Skill>
							<Image src={javascript} alt='javascript' />
						</SkillContainer>

						<SkillContainer>
							<Skill>mongodb</Skill>
							<Image src={mongodb} alt='mongodb' />
						</SkillContainer>

						<SkillContainer>
							<Skill>nodejs</Skill>
							<Image src={nodejs} alt='nodejs' />
						</SkillContainer>

						<SkillContainer>
							<Skill>expressjs</Skill>
							<Image src={expressjs} alt='expressjs' />
						</SkillContainer>

						<SkillContainer>
							<Skill>react</Skill>
							<Image src={react} alt='react' />
						</SkillContainer>

						<SkillContainer>
							<Skill>heroku</Skill>
							<Image src={heroku} alt='heroku' />
						</SkillContainer>

						<SkillContainer>
							<Skill>git</Skill>
							<Image src={git} alt='git' />
						</SkillContainer>

						<SkillContainer>
							<Skill id='gitlab-ci-cd'>Gitlab CI/CD</Skill>
							<Image src={gitlabcicd} alt='gitlabcicd' />
						</SkillContainer>

						<SkillContainer>
							<Skill>rest</Skill>
							<Image src={rest} alt='rest' />
						</SkillContainer>

						<SkillContainer>
							<Skill>postman</Skill>
							<Image src={postman} alt='postman' />
						</SkillContainer>

						<SkillContainer>
							<Skill>bootstrap</Skill>
							<Image src={bootstrap} alt='bootstrap' />
						</SkillContainer>
					</ImageContainer>
				</Row>
			</MyContainer>
		</Container>
	)
}

// const skills = [
// 	{
// 		skill: 'css3',
// 		src: css3,
// 		alt: 'css3',
// 		id: '',
// 	},
// 	{
// 		skill: 'javascript',
// 		src: javascript,
// 		alt: 'javascript',
// 		id: '',
// 	},

// 	{
// 		skill: 'mongodb',
// 		src: mongodb,
// 		alt: 'mongodb',
// 		id: '',
// 	},
// 	{
// 		skill: 'nodejs',
// 		src: nodejs,
// 		alt: 'nodejs',
// 		id: '',
// 	},
// 	{
// 		skill: 'expressjs',
// 		src: expressjs,
// 		alt: 'expressjs',
// 		id: '',
// 	},
// 	{
// 		skill: 'react',
// 		src: react,
// 		alt: 'react',
// 		id: '',
// 	},
// 	{
// 		skill: 'heroku',
// 		src: heroku,
// 		alt: 'heroku',
// 		id: '',
// 	},
// 	{
// 		skill: 'git',
// 		src: git,
// 		alt: 'git',
// 		id: '',
// 	},
// 	{
// 		skill: 'Gitlab CI/CD',
// 		src: gitlabcicd,
// 		alt: 'Gitlab CI/CD',
// 		id: 'gitlab-ci-cd'
// 	},
// 	{
// 		skill: 'rest',
// 		src: rest,
// 		alt: 'rest',
// 		id: '',
// 	},
// 	{
// 		skill: 'postman',
// 		src: postman,
// 		alt: 'postman',
// 		id: '',
// 	},
// 	{
// 		skill: 'bootstrap',
// 		src: bootstrap,
// 		alt: 'bootstrap',
// 		id: '',
// 	},
// ]

// {skills.map(items => {
//   return (
//     <SkillContainer>
//       <Skill>{items.skill}</Skill>
//       <Image src={items.src} id={items.id} alt={items.alt} />
//     </SkillContainer>
//   )
// })}
