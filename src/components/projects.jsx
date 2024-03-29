import * as React from 'react';
import styled from 'styled-components';
import Project from './project';

const Container = styled.section`
  @media (max-width: 1023px) {
    padding-top: 9vw;
  }
  @media (min-width: 1024px) {
    position: relative;
    width: 62.1%;
    padding: 3vw 5vw 0 0;
    border-top: 1px solid #555;
    border-left: 1px solid #555;
    background-color: #f8f8ff;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -5vw;
      width: 5vw;
      height: 100%;
      background-color: #f8f8ff;
    }
  }
`;
const H3 = styled.h3`
  text-align: center;
`;
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    margin-top: 3vw;
    border-top: 1px solid #555;
  }
`;
const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 50%;
    border-bottom: 1px solid #555;
    &:nth-of-type(odd) {
      border-right: 1px solid #555;
    }
  }
`;
const ProjectDescription = styled.div`
  width: 90vw;
  @media (min-width: 1024px) {
    width: 23.7vw;
  }
`;
const H4 = styled.h4`
  padding-top: 2vw;
  @media (min-width: 1024px) {
    font-size: 1.2vw;
    line-height: 1.7vw;
  }
`;
const P = styled.p`
  padding-top: 2vw;
  @media (min-width: 1024px) {
    font-size: 1vw;
    line-height: 1.5vw;
  }
`;
const Span = styled.span`
  color: ${(props) => props.color};
`;

const projects = [
  {
    color: 'orange',
    fontColor: '#333',
    innerBlobColor: '#fff',
    image: 'charizard.png',
    customClass: 'project3',
    name: 'Order Charizard',
    delay: '-11s',
    href: 'https://order-charizard.vyost.usermd.net/',
    description:
      'This application allows users to draw three different Charizard Pokemon cards from the Pokemon TCG API.',
    goal: 'Learning Jest + RTL, React Query, Formik, Husky',
    stack:
      'React + TypeScript, Redux, React Query, Axios, MSW, Formik, ESLint (Airbnb preset) + Prettier, MUI, Jest + RTL, Husky',
  },
  {
    color: 'plum',
    fontColor: '#333',
    innerBlobColor: '#fff',
    image: 'population-counter.png',
    customClass: 'project3',
    name: 'Population Counter',
    delay: '-4s',
    href: 'https://population-counter.vyost.usermd.net/',
    description:
      'This app counts average population of chosen regions of chosen countries in chosen time period.',
    goal: 'Learning Redux, TypeScript, ESLint',
    stack:
      'React + TypeScript, Redux, ESLint (Google preset) + Prettier, Material UI, Styled Components',
  },
  {
    color: '#74B72E',
    innerBlobColor: '#1a1e23',
    image: 'magia.png',
    name: 'Magiainternetu .com',
    delay: '-9s',
    href: 'https://magiainternetu.com/strony-internetowe-ostroda/',
    description:
      "The webpage I created for my local freelance business. I am open for a non-competition agreement and quiting freelancing, \
    if that's required.",
    goal: 'Learning React, Gatsby, Headless CMS, SEO for SPA webpages',
    stack: 'React, Gatsby, Wordpress, GraphQL, Headless CMS',
  },
  {
    color: 'royalblue',
    image: 'btc.png',
    customClass: 'project1',
    name: 'Crypto Portfolio',
    delay: '-1s',
    href: 'https://crypto-portfolio.vyost.usermd.net/',
    description:
      "The application allows users to track their cryptocurrency transactions profit (or loss). \
    It has a login system. After registering and signing in, user is able to add a transaction by typing \
    certain cryptocurrency name, it's ammount and price. After submitting a transaction, the app fetches current price of chosen \
    cryptocurrency and counts current profit (or loss) of the user. This kind of fetch also happens after each log in for all the \
    transactions.",
    goal: 'Learning React, NodeJS + Express',
    stack: 'React, NodeJS + Express, MySQL, Material UI, REST API',
  },
  {
    color: 'gold',
    fontColor: '#333',
    innerBlobColor: '#eee',
    image: 'uploader.png',
    customClass: 'project2',
    name: 'Video Uploader',
    delay: '-15s',
    href: 'https://github.com/MarekSzczepanski/Video-Uploader',
    description:
      'The application allows users to upload their own video file on the page by using Front-end interface.',
    goal: "Learning NodeJS + Express and it's deployment, EJS templates rendering",
    stack: 'NodeJS + Express, MySQL, EJS, REST API',
  },
  {
    color: 'crimson',
    innerBlobColor: '#ddd',
    image: 'swords.png',
    customClass: 'project3',
    name: 'Simple Adventure',
    delay: '-6s',
    href: 'https://marekszczepanski.github.io/Simple-Adventure/',
    description:
      'Simple adventure is a browser turn based game with a fantasy/medieval theme. The project is made for desktop view only.',
    goal: 'Learning Object Oriented JavaScript',
    stack: 'Vanilla JavaScript',
  },
];

const Projects = () => {
  return (
    <Container>
      <H3>my projects</H3>
      <ProjectsContainer>
        {projects.map((project) => {
          return (
            <ProjectContainer key={project.name}>
              <Project
                customClass={project.customClass}
                color={project.color}
                fontColor={project.fontColor}
                innerBlobColor={project.innerBlobColor}
                image={project.image}
                name={project.name}
                delay={project.delay}
                href={project.href}
                key={project.name}
              ></Project>
              <ProjectDescription>
                <H4>
                  <Span color={project.color}>Goal:</Span> {project.goal}
                </H4>
                <H4>
                  <Span color={project.color}>Stack:</Span> {project.stack}
                </H4>
                <P>
                  <Span color={project.color}>Description:</Span>{' '}
                  {project.description}
                </P>
              </ProjectDescription>
            </ProjectContainer>
          );
        })}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
