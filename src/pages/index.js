import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ContactButton from '../components/contactButton';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Project from '../components/project';
import ThingsILike from '../components/thingsILike';
import Footer from '../components/footer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 4vw;
  @media (max-width: 1023px) {
    margin-top: 9.5vw;
  }
`
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Wrap = styled.div`
  @media (min-width: 1024px) {
    width: 49.8vw;
  }
  @media (max-width: 1023px) {
    margin-top: 5vw;
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

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <ContactButton></ContactButton>
    <Container>
      <Skills></Skills>
      <Experience></Experience>
    </Container>
    <Wrap>
      <h3>projects</h3>
      <ProjectsContainer>
        {projects.map((project, i) => {
          return <Project customClass={project.customClass} color={project.color} fontColor={project.fontColor}
           innerBlobColor={project.innerBlobColor} image={project.image} text={project.text}
           delay={project.delay} href={project.href} key={i}></Project>
        })}
      </ProjectsContainer>
    </Wrap>
    <ThingsILike></ThingsILike>
    <Footer></Footer>
  </Layout>
)

export const Head = () => <Seo title='Marek Szczepański' />
export default IndexPage
