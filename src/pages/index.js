import * as React from 'react';
import styled from "styled-components"
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ContactButton from '../components/contactButton';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Project from '../components/project';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 5vw;
`
const SkillsH3 = styled.h3`
  width: 62%;
  @media (max-width: 1023px) {
    width: 100%;
  }
`
const ExperienceH3 = styled.h3`
  width: 38%;
  @media (max-width: 1023px) {
    width: unset;
    margin-top: 520px;
    margin-bottom: 8px;
  }
`
const ProjectsH3 = styled.h3`
  margin-top: 10vw;
`

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <Container>
      <SkillsH3>My skills</SkillsH3>
      <ExperienceH3>Experience</ExperienceH3>
      <Skills></Skills>
      <Experience></Experience>
    </Container>
    <ContactButton></ContactButton>
    <ProjectsH3>Projects</ProjectsH3>
    <Container>
      <Project></Project>
      <Project></Project>
    </Container>
  </Layout>
)

export const Head = () => <Seo title='Home' />
export default IndexPage
