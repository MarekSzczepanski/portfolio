import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Blob from "../components/blob";

const About = styled.h4`
  font-size: 1vw;
  max-width: 45vw;
  border-top: 1px solid;
  padding-top: 2vw;
  @media (max-width: 1023px) {
    font-size: 12px;
    max-width: 87vw;
    padding-top: 18px;
    position: relative;
    z-index: 2;
  }
`
const Letter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${props => props.bounce ? Bounce(props.color) : null} 1s linear;
  line-height: 6vw;
  height: 6vw;
  cursor: default;
`
const Bounce = (color) => keyframes`
  0% { transform: scale(1, 1) }
  10% { transform: scale(2, 0.5) }
  15% { transform: scale(1, 1) }
  25% { transform: scale(1.8, 0.7); color: ${color}; }
  30% { transform: scale(1, 1) }
  40% { transform: scale(1.7, 0.75) }
  45% { transform: scale(1, 1) }
  55% { transform: scale(1.5, 0.85) }
  60% { transform: scale(1, 1) }
  70% { transform: scale(1.4, 0.9); color: ${color}; }
  75% { transform: scale(1, 1) }
  85% { transform: scale(1.2, 0.94) }
  90% { transform: scale(1, 1) }
  95% { transform: scale(1.1, 0.97) }
  100% { transform: scale(1, 1) }
`

const translate1 = {x1: '1px', x2: '10px', x3: '40px', x4: '65px', x5: '90px', x6: '50px', x7: '40px', x8: '30px', x9: '1px', y1: '1px', y2: '10px', y3: '40px', y4: '60px', y5: '90px', y6: '70px', y7: '40px', y8: '15px', y9: '1px'};
const translate2 = {x1: '1px', x2: '-3px', x3: '-10px', x4: '5px', x5: '15px', x6: '-35px', x7: '-40px', x8: '-35px', x9: '1px', y1: '1px', y2: '-5px', y3: '-20px', y4: '0px', y5: '10px', y6: '25px', y7: '40px', y8: '0px', y9: '1px'};
const translate3 = {x1: '1px', x2: '-25px', x3: '-80px', x4: '-10px', x5: '1px', x6: '-10px', x7: '-20px', x8: '-40px', x9: '1px', y1: '-15px', y2: '-40px', y3: '-10px', y4: '10px', y5: '-15px', y6: '-30px', y7: '5px', y8: '-5px', y9: '-15px'};

const nameLetters = ['M', 'a', 'r', 'e', 'k', '', 'S', 'z', 'c', 'z', 'e', 'p', 'a', 'ń', 's', 'k', 'i',];
const titleLetters = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
const colors = ['#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', '', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum', '#FF003F', 'gold', '#6787E7', '#74B72E', 'orange', 'plum'];
const colors2 = ['#f0DB4F', '#61DBFB', '#68A063', '#f0DB4F', '#61DBFB', '#68A063', '#f0DB4F', '#61DBFB', '#61DBFB', '#68A063', '#f0DB4F', '#61DBFB', '#68A063', '#f0DB4F', '#61DBFB', '#68A063', '#f0DB4F', '#61DBFB', '#68A063', ];
const letterAnimationLocks = [];

letterAnimationLocks[0] = null;
for (let i=0; i < nameLetters.length + titleLetters.length + 2; i++) {
  letterAnimationLocks[i+1] = null;
}

const Hero = () => {
  const [isLetterHovered, setIsLetterHovered] = useState(0);

  const nameRefs = useMemo(() => {
    const refs = {};
    refs[0] = {};
    for (let i=0; i<nameLetters.length + titleLetters.length + 2; i++) {
      refs[i+1] = React.createRef(null);
    }
    return refs;
  }, [nameLetters])

  useEffect(() => {
    if (isLetterHovered) {
      nameRefs[isLetterHovered].current = true;
      setIsLetterHovered(null);
      setTimeout(() => { nameRefs[isLetterHovered].current = null }, 1000);
    }
  }, [isLetterHovered])

  const handleMouseEnter= (e) => {
    if (e.target.dataset.letter) {
      if (!letterAnimationLocks[Number(e.target.dataset.letter)]) {
        setIsLetterHovered(Number(e.target.dataset.letter));
        letterAnimationLocks[Number(e.target.dataset.letter)] = true;
        setTimeout(() => { letterAnimationLocks[Number(e.target.dataset.letter)] = null }, 1000);
      }
    }
  }
  
  return (
    <>
      <div >
        <h1 role='presentation'>
          {nameLetters.map(function(object, i) {
            return object.length === 1 ? <Letter onMouseEnter={handleMouseEnter} bounce={nameRefs[i+1].current} color={colors[i]} data-letter={i+1} key={i}>{nameLetters[i]}</Letter> : <br></br>;
          })}
        </h1>
        <h2>
          {titleLetters.map(function(object, i) {
            return object.length === 1 ? <Letter onMouseEnter={handleMouseEnter} bounce={nameRefs[i+1+nameLetters.length].current} color={colors2[i]} data-letter={i+1+nameLetters.length} key={i+nameLetters.length}>{titleLetters[i]}</Letter> : <span> </span>;
          })}
        </h2>
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
