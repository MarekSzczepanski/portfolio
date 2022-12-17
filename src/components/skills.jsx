import * as React from 'react';
import styled from 'styled-components';
import Blob from '../components/blob';

const translate = {x1: '0vw', x2: '7vw', x3: '20vw', x4: '30vw', x5: '40.65vw', x6: '30vw', x7: '20vw', x8: '7vw', x9: '0vw', y1: '20vw', y2: '35vw', y3: '40vw', y4: '35vw', y5: '20vw', y6: '10vw', y7: '3vw', y8: '10vw', y9: '20vw'};
const mTranslate = {x1: '-2vw', x2: '2vw', x3: '35vw', x4: '60vw', x5: '66vw', x6: '60vw', x7: '35vw', x8: '2vw', x9: '-2vw', y1: '50vw', y2: '90vw', y3: '100vw', y4: '90vw', y5: '50vw', y6: '20vw', y7: '10vw', y8: '20vw', y9: '50vw'};
const translate1 = {x1: '11vw', x2: '17vw', x3: '19vw', x4: '20vw', x5: '19vw', x6: '20vw', x7: '20vw', x8: '17vw', x9: '11vw', y1: '12vw', y2: '15vw', y3: '16vw', y4: '13vw', y5: '12vw', y6: '11vw', y7: '10vw', y8: '10vw', y9: '12vw'};
const translate2 = {x1: '11vw', x2: '9vw', x3: '9vw', x4: '11vw', x5: '11vw', x6: '10vw', x7: '11vw', x8: '10vw', x9: '11vw', y1: '25vw', y2: '23vw', y3: '25vw', y4: '23vw', y5: '22vw', y6: '21vw', y7: '24vw', y8: '20vw', y9: '25vw'};
const translate3 = {x1: '23vw', x2: '25vw', x3: '23vw', x4: '24vw', x5: '25vw', x6: '22vw', x7: '25vw', x8: '24vw', x9: '23vw', y1: '22vw', y2: '25vw', y3: '23vw', y4: '22vw', y5: '22vw', y6: '23vw', y7: '24vw', y8: '26vw', y9: '22vw'};
const mTranslate1 = {x1: '18vw', x2: '25vw', x3: '28vw', x4: '22vw', x5: '26vw', x6: '21vw', x7: '29vw', x8: '27vw', x9: '18vw', y1: '30vw', y2: '28vw', y3: '27vw', y4: '28vw', y5: '26vw', y6: '29vw', y7: '26vw', y8: '25vw', y9: '30vw'};
const mTranslate2 = {x1: '15vw', x2: '18vw', x3: '19vw', x4: '17vw', x5: '16vw', x6: '18vw', x7: '16vw', x8: '19vw', x9: '15vw', y1: '50vw', y2: '55vw', y3: '50vw', y4: '58vw', y5: '48vw', y6: '51vw', y7: '50vw', y8: '55vw', y9: '50vw'};
const mTranslate3 = {x1: '33vw', x2: '37vw', x3: '33vw', x4: '35vw', x5: '31vw', x6: '37vw', x7: '35vw', x8: '37vw', x9: '33vw', y1: '72vw', y2: '69vw', y3: '71vw', y4: '72vw', y5: '68vw', y6: '70vw', y7: '71vw', y8: '71vw', y9: '72vw'};
const skills = ['html', 'css', 'git', 'mysql', 'mongodb', 'express', 'cypress', 'jest', 'gatsby', 'gsap', 'percy', 'graphql', 'rest', 'ci / cd', 'npm', 'eslint', 'webpack'];
const colors = ['#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange'];
const mottoTops = ['12.35vw', '12.35vw', '32vw', '35.9vw'];
const mottoLefts = ['-.2%', '39.9%', '47.2%', '-1.35%'];
const mottoRotates = ['313', '36.7', '133.5', '240'];
const mottoPartWords = ['self-', '-taught', 'and', 'proud'];
const mottoColors = ['crimson', 'gold', '#6787E7', '#74B72E'];

const Container = styled.div`
  width: 56%;
  height: 50vw;
  font-size: 1vw;
  @media (max-width: 1023px) {
    width: 100%;
    height: 120vw;
  }
`
const MottoPart = styled.h3`
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  padding: 0 .5vw 0 .8vw;
  letter-spacing: .2vw;
  background-color: ${props => props.color || 0};
  transform: rotate(${props => props.rotate || 0}deg);
  @media (max-width: 1023px) {
    display: none;
  }
`

const Skills = () => (
  <Container>
    <h3>skills</h3>
    {mottoTops.map(function(object, i){
      return <MottoPart key={i} top={mottoTops[i]} left={mottoLefts[i]} rotate={mottoRotates[i]} color={mottoColors[i]}>{mottoPartWords[i]}</MottoPart>
    })}
    {skills.map(function(object, i){
      return <Blob key={i} color={colors[i]} border={'black'} text={skills[i]} delay={i * 1.36} zIndex={i} skill={true} translate={translate} mTranslate={mTranslate} measure="9vw" mMeasure="25vw"/>;
    })}
    <Blob color={'#f0DB4F'} border={'black'} text={'javascript'} skill={true} zIndex={21} fontSize={'1.5vw'} measure="16vw" mMeasure="38vw" translate={translate1} mTranslate={mTranslate1} />
    <Blob color={'#61DBFB'} border={'black'} text={'react'} skill={true} zIndex={22} delay={.5} fontSize={'1.5vw'} measure="15vw" mMeasure="40vw" translate={translate2} mTranslate={mTranslate2} />
    <Blob color={'#68A063'} border={'black'} text={'nodejs'} skill={true} zIndex={20} delay={1} fontSize={'1.5vw'} measure="14vw" mMeasure="37vw" translate={translate3} mTranslate={mTranslate3} />
  </Container>
)

export default Skills
