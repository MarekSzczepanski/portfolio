import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/hero'
import styled from "styled-components"
import Blob from '../components/blob'

const translate = {x1: '0vw', x2: '7vw', x3: '20vw', x4: '30vw', x5: '40vw', x6: '30vw', x7: '20vw', x8: '7vw', x9: '0vw', y1: '200px', y2: '400px', y3: '450px', y4: '400px', y5: '200px', y6: '50px', y7: '0px', y8: '50px', y9: '200px'};
const skills = ['html', 'css', 'git', 'mysql', 'mongodb', 'express', 'cypress', 'jest', 'gatsby', 'gsap', 'percy', 'graphql', 'rest', 'ci / cd', 'npm', 'eslint', 'webpack'];
const colors = ['#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange',];

const SkillsContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  height: 600px;
  font-size: 1vw;
`

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <h3>My skills</h3>
    <SkillsContainer>
      {skills.map(function(object, i){
          return <Blob key={i} color={colors[i]} border={'black'} text={skills[i]} delay={i * 1.36} zIndex={i} skill={true} translate={translate} measure="9vw" mMeasure="49vw" />;
      })}
      <Blob color={'#f0DB4F'} border={'black'} text={'javascript'} skill={true} zIndex={21} fontSize={'1.5vw'} translate={{x1: '11vw', x2: '17vw', x3: '22vw', x4: '20vw', x5: '20vw', x6: '22vw', x7: '20vw', x8: '17vw', x9: '11vw', y1: '80px', y2: '130px', y3: '150px', y4: '130px', y5: '120px', y6: '110px', y7: '105px', y8: '100px', y9: '80px'}} measure="16vw" mMeasure="49vw" />
      <Blob color={'#61DBFB'} border={'black'} text={'react'} skill={true} zIndex={22} delay={.5} fontSize={'1.5vw'} translate={{x1: '11vw', x2: '9vw', x3: '9vw', x4: '11vw', x5: '11vw', x6: '10vw', x7: '11vw', x8: '10vw', x9: '11vw', y1: '200px', y2: '230px', y3: '250px', y4: '230px', y5: '220px', y6: '210px', y7: '205px', y8: '200px', y9: '200px'}} measure="15vw" mMeasure="49vw" />
      <Blob color={'#68A063'} border={'black'} text={'nodejs'} skill={true} zIndex={20} delay={1} fontSize={'1.5vw'} translate={{x1: '23vw', x2: '19vw', x3: '23vw', x4: '20vw', x5: '21vw', x6: '19vw', x7: '25vw', x8: '27vw', x9: '23vw', y1: '220px', y2: '270px', y3: '280px', y4: '270px', y5: '280px', y6: '250px', y7: '220px', y8: '210px', y9: '220px'}} measure="14vw" mMeasure="49vw" />
    </SkillsContainer>
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
