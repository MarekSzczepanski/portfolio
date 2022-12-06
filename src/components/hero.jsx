import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Blob from "../components/blob";

const translate1 = {x1: '1px', x2: '10px', x3: '40px', x4: '65px', x5: '90px', x6: '50px', x7: '40px', x8: '30px', x9: '1px', y1: '1px', y2: '10px', y3: '40px', y4: '60px', y5: '90px', y6: '70px', y7: '40px', y8: '15px', y9: '1px'};
const translate2 = {x1: '1px', x2: '-3px', x3: '-10px', x4: '5px', x5: '15px', x6: '-35px', x7: '-40px', x8: '-35px', x9: '1px', y1: '1px', y2: '-5px', y3: '-20px', y4: '0px', y5: '10px', y6: '25px', y7: '40px', y8: '0px', y9: '1px'};
const translate3 = {x1: '1px', x2: '-25px', x3: '-80px', x4: '-10px', x5: '5px', y1: '-15px', y2: '-40px', y3: '-10px', y4: '10px', y5: '-20px'};

const nameLetters = ['M', 'a', 'r', 'e', 'k'];
const surnameLetters = ['S', 'z', 'c', 'z', 'e', 'p', 'a', 'ń', 's', 'k', 'i'];
const letters2 = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

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

const Bounce = keyframes`
0% { transform: scale(1, 1) }
10% { transform: scale(2, 0.5) }
15% { transform: scale(1, 1) }
25% { transform: scale(1.8, 0.7) }
30% { transform: scale(1, 1) }
40% { transform: scale(1.7, 0.75) }
45% { transform: scale(1, 1) }
55% { transform: scale(1.5, 0.85) }
60% { transform: scale(1, 1) }
70% { transform: scale(1.4, 0.9) }
75% { transform: scale(1, 1) }
85% { transform: scale(1.2, 0.94) }
90% { transform: scale(1, 1) }
95% { transform: scale(1.1, 0.97) }
100% { transform: scale(1, 1) }
`

const Letter = styled.span`
display: inline-block;
position: relative;
transition: transform .2s linear;
animation: ${props => props.bounce ? Bounce : null} 1s linear;
`

const Hero = () => {
  const [isLetterHovered, setIsLetterHovered] = useState(0);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const arr = [null, ref1, ref2, ref3, ref4, ref5];

  useEffect(() => {
    if (isLetterHovered) {
      arr[isLetterHovered].current = true;
      setIsLetterHovered(null);
      setTimeout(() => { arr[isLetterHovered].current = null}, 1000);
    }
  }, [isLetterHovered])

  const handleMouseEnter = (e) => {
    setIsLetterHovered(Number(e.target.dataset.letter));
  }


  return (
    <>
      <div>
        <h1 role='presentation'>
        {nameLetters.map(function(object, i) {
          return <Letter onMouseEnter={handleMouseEnter} bounce={arr[i+1].current} data-letter={i+1} key={i+1}>{nameLetters[i]}</Letter>;
        })}
          <br />
           Szczepański
        </h1>
        <h2>Frontend Developer</h2>
        <About>I'm settled in Ostróda, Poland. I have 3 years of experience with Frontend. I like to work with React and NodeJS, preferably remote. Coding is neverending challenge that keeps me excited. </About>
      </div>
      <Blob noMove={true} color="gray" measure="30vw" top="100px" left="60vw" mMeasure="48vw" mTop="10px" mLeft="49vw" image={true}></Blob>
      <Blob color="royalblue" measure="12vw" top="3vw" left="22vw" delay="-3" mMeasure="20vw" mTop="2vw" mLeft="5vw" translate={translate1} mTranslate={translate1}></Blob>
      <Blob color="gold" measure="10vw" top="25vw" left="60vw" delay="-5" mMeasure="14vw" mLeft="45vw" translate={translate2} mTranslate={translate2}></Blob>
      <Blob color="crimson" measure="13vw" top="4vw" left="85vw" delay="-1" mMeasure="22vw" mTop="230px" mLeft="75vw" translate={translate3} mTranslate={translate3}></Blob>
    </>
  )
}

export default Hero

