import {
	Container,
	Title,
	Details,
	ProgressBarWrap,
	Skill,
	Value,
	Progress,
	ProgressBar,
} from './index.style'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function About() {
	return (
		<Container>
			<Row>
				<div class='container'>
					<Title>Skills</Title>
					<Details>
						I'm a full stack developer who uses the MERN Stack to develop my web
						apps or websites. My current skill set is as follows:
					</Details>

					<Row>
						<Col md={6}>
							<Progress>
								<Skill>
									HTML / CSS <Value>{htmlCss}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='html-css'></ProgressBar>
								</ProgressBarWrap>
							</Progress>

							<Progress>
								<Skill>
									Javascript <Value>{javascript}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='javascript'></ProgressBar>
								</ProgressBarWrap>
							</Progress>

							<Progress>
								<Skill>
									React <Value>{react}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='react'></ProgressBar>
								</ProgressBarWrap>
							</Progress>
						</Col>

						<Col lmd={6}>
							<Progress>
								<Skill>
									Node <Value>{node}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='node'></ProgressBar>
								</ProgressBarWrap>
							</Progress>

							<Progress>
								<Skill>
									Express<Value>{express}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='express'></ProgressBar>
								</ProgressBarWrap>
							</Progress>

							<Progress>
								<Skill>
									MongoDB <Value>{mongodb}</Value>
								</Skill>
								<ProgressBarWrap>
									<ProgressBar id='mongodb'></ProgressBar>
								</ProgressBarWrap>
							</Progress>
						</Col>
					</Row>
				</div>
			</Row>
		</Container>
	)
}

const htmlCss = '60%'
const javascript = '30%'
const react = '15%'
const node = '5%'
const express = '5%'
const mongodb = '5%'
