import * as React from 'react';
import styled from 'styled-components';
import Project from './project';

const Container = styled.section`
  @media (min-width: 1024px) {
    position: relative;
    width: 62.1%;
    padding-left: 5vw;
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
`
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const projects = [
  {
    color: '#74B72E',
    innerBlobColor: '#1a1e23',
    image: 'magia.png',
    text: 'Magiainternetu .com',
    delay: '-9s',
    href: 'https://magiainternetu.com/strony-internetowe-ostroda/',
  },
  {
    color: 'royalblue',
    image: 'btc.png',
    customClass: 'project1',
    text: 'Crypto Portfolio',
    delay: '-1s',
    href: 'https://cryptocalc.vyost.usermd.net/',
  },
  {
    color: 'gold',
    fontColor: '#333',
    innerBlobColor: '#eee',
    image: 'uploader.png',
    customClass: 'project2',
    text: 'Video Uploader',
    delay: '-15s',
    href: 'https://github.com/MarekSzczepanski/Video-Uploader',
  },
  {
    color: 'crimson',
    innerBlobColor: '#ddd',
    image: 'swords.png',
    customClass: 'project3',
    text: 'Simple Adventure',
    delay: '-6s',
    href: 'https://marekszczepanski.github.io/Simple-Adventure/',
  },
]

const Projects = () => { 
  return (
    <Container>
      <h3>projects</h3>
        <ProjectsContainer>
          {projects.map((project, i) => {
            return <Project customClass={project.customClass} color={project.color} fontColor={project.fontColor}
            innerBlobColor={project.innerBlobColor} image={project.image} text={project.text}
            delay={project.delay} href={project.href} key={i}></Project>
          })}
        </ProjectsContainer>
    </Container>
  )
}

export default Projects
