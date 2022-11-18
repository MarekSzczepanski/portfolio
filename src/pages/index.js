import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { keyframes } from "styled-components"
import Image from '../components/Image'

const Morph = keyframes`
  0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 57% 43% 40% 60% / 71% 48% 52% 29%; }
  50% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
  67% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
  80% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
  100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
`
const Move = (data) => keyframes`
  0% { transform: translate(${data.x1}, ${data.y1}), rotate(0deg) }
  25% { transform: translate(${data.x2}, ${data.y2}) rotate(90deg) }
  50% { transform: translate(${data.x3}, ${data.y3}) rotate(180deg) }
  75% { transform: translate(${data.x4}, ${data.y4}) rotate(270deg) }
  100% { transform: translate(${data.x5}, ${data.y5}), rotate(360deg) }
`
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify ? props.justify : 'center'};
  margin-top: 5vw;
`
const Circle = styled.div`
  position: ${props => props.position ? props.position : 'absolute'};
  top: ${props => props.top ? props.top : '0'};
  left: ${props => props.left? props.left : '0'};
  width: ${props => props.measure};
  height: ${props => props.measure};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: ${props => props.color};
  overflow: hidden;
  animation: ${Morph} 10s linear infinite ${props => props.delay ? props.delay : null}, ${props => props.noMove ? null : Move(props.translate)} 13s linear infinite;
`
const About = styled.h4`
  font-size: 1.1vw;
  max-width: 45vw;
`

const ProfileImage = () => {
  return (
    <Image
      src="me.jpg"
      alt="profile"
      style={{
        height: '100%',
      }}
    />
  );
};

const IndexPage = () => (
  <Layout>
    <Wrap className="wrap" justify="space-between">
      <div>
        <h1>Marek <br /> Szczepański</h1>
        <h2>Frontend Developer</h2>
        <About>I'm settled in Ostróda, Poland. I have 3 years of experience with the Frontend. I like to work with React and NodeJS, preferably remote. Coding is neverending challenge that keeps me excited. </About>
      </div>
      <Circle className="circle" noMove={true} measure="30vw" position="static">
        <ProfileImage src="../images/me.jpg" alt="profile"></ProfileImage>
      </Circle>
    </Wrap>
    <Wrap className="wrap" justify="space-between">
      <Circle className="circle" color="royalblue" measure="12vw" top="3vw" left="22vw" delay="-3s" translate={{x1: '1px', x2: '40px', x3: '90px', x4: '40px', x5: '1px', y1: '1px', y2: '40px', y3: '90px', y4: '40px', y5: '1px'}}></Circle>
    </Wrap>
    <Wrap className="wrap" justify="space-between">
      <Circle className="circle" color="gold" measure="10vw" top="25vw" left="60vw" delay="-5s" translate={{x1: '1px', x2: '-10px', x3: '15px', x4: '-40px', x5: '1px', y1: '1px', y2: '-20px', y3: '10px', y4: '40px', y5: '-10px'}}></Circle>
    </Wrap>
    <Wrap className="wrap" justify="space-between">
      <Circle className="circle" color="crimson" measure="13vw" top="4vw" left="85vw" delay="-3s" translate={{x1: '1px', x2: '-25px', x3: '-80px', x4: '-10px', x5: '5px', y1: '-15px', y2: '-40px', y3: '-10px', y4: '10px', y5: '-20px'}}></Circle>
    </Wrap>
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
