import * as React from 'react';
import styled from "styled-components"
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ContactButton from '../components/contactButton';
import Skills from '../components/skills';
import Experience from '../components/experience';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 5vw;
`
const SkillsH3 = styled.h3`
  width: 62%;
`
const ExperienceH3 = styled.h3`
  width: 38%;
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
  </Layout>
)

export const Head = () => <Seo title='Home' />
export default IndexPage
