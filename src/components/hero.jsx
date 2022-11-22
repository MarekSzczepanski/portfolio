import * as React from "react"
import styled from "styled-components"
import Blob from '../components/blob'

const About = styled.h4`
  font-size: 1vw;
  max-width: 45vw;
  @media (max-width: 1023px) {
    font-size: 12px;
    max-width: 87vw;
    border-top: 1px solid;
    padding-top: 18px;
    position: relative;
    z-index: 2;
  }
`
const Hero = () => (
    <>
        <div>
            <h1>Marek <br /> Szczepański</h1>
            <h2>Frontend Developer</h2>
            <About>I'm settled in Ostróda, Poland. I have 3 years of experience with Frontend. I like to work with React and NodeJS, preferably remote. Coding is neverending challenge that keeps me excited. </About>
        </div>
        <Blob noMove={true} color="gray" measure="30vw" top="100px" left="60vw" mMeasure="48vw" mTop="10px" mLeft="49vw" image={true}></Blob>
        <Blob color="royalblue" measure="12vw" top="3vw" left="22vw" delay="-3" mMeasure="20vw" mTop="2vw" mLeft="5vw" translate={{x1: '1px', x2: '10px', x3: '40px', x4: '65px', x5: '90px', x6: '50px', x7: '40px', x8: '30px', x9: '1px', y1: '1px', y2: '10px', y3: '40px', y4: '60px', y5: '90px', y6: '70px', y7: '40px', y8: '15px', y9: '1px'}}></Blob>
        <Blob color="gold" measure="10vw" top="25vw" left="60vw" delay="-5" mMeasure="14vw" mLeft="45vw" translate={{x1: '1px', x2: '-3px', x3: '-10px', x4: '5px', x5: '15px', x6: '-35px', x7: '-40px', x8: '-35px', x9: '1px', y1: '1px', y2: '-5px', y3: '-20px', y4: '0px', y5: '10px', y6: '25px', y7: '40px', y8: '0px', y9: '-10px'}}></Blob>
        <Blob color="crimson" measure="13vw" top="4vw" left="85vw" delay="-1" mMeasure="22vw" mTop="230px" mLeft="75vw" translate={{x1: '1px', x2: '-25px', x3: '-80px', x4: '-10px', x5: '5px', y1: '-15px', y2: '-40px', y3: '-10px', y4: '10px', y5: '-20px'}}></Blob>
    </>
)

export default Hero

