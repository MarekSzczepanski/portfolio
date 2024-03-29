import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import Blob from '../components/blob';

const H1 = styled.h1`
  position: relative;
  margin: 7vw 0 0;
  padding: 0;
  font-family: 'Rubik Spray Paint';
  font-size: 6.75vw;
  font-weight: 500;
  line-height: 6.55vw;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  z-index: 2;
  @media (max-width: 1023px) {
    font-size: 11vw;
    line-height: 13.5vw;
    margin-top: 38vw;
  }
`;
const H2 = styled.h2`
  position: relative;
  margin: 0;
  font-family: 'Rubik Spray Paint';
  font-size: 3.6vw;
  font-weight: 500;
  z-index: 2;
  @media (max-width: 1023px) {
    font-size: 7.5vw;
    padding-bottom: 2vw;
  }
`;
const About = styled.h4`
  font-size: 1.3vw;
  max-width: 56%;
  border-top: 1px solid;
  padding-top: 2vw;
  @media (max-width: 1023px) {
    font-size: 3.7vw;
    max-width: 90vw;
    padding-top: 5.8vw;
    position: relative;
    z-index: 2;
  }
`;
const Letter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${(props) => (props.bounce ? Bounce(props.color) : null)} 1s linear;
  line-height: 6vw;
  height: 6vw;
  cursor: default;
`;
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
`;

const translate1 = {
  x1: '0vw',
  x2: '1vw',
  x3: '4vw',
  x4: '6.5vw',
  x5: '9vw',
  x6: '5vw',
  x7: '4vw',
  x8: '3vw',
  x9: '0vw',
  y1: '0vw',
  y2: '1vw',
  y3: '4vw',
  y4: '6vw',
  y5: '9vw',
  y6: '7vw',
  y7: '4vw',
  y8: '2vw',
  y9: '0vw',
};
const translate2 = {
  x1: '0vw',
  x2: '-.5vw',
  x3: '-1vw',
  x4: '-5vw',
  x5: '-2vw',
  x6: '-4vw',
  x7: '-5vw',
  x8: '-3vw',
  x9: '0vw',
  y1: '0vw',
  y2: '-1vw',
  y3: '-2vw',
  y4: '0vw',
  y5: '-1vw',
  y6: '=3vw',
  y7: '-4vw',
  y8: '0vw',
  y9: '0vw',
};
const translate3 = {
  x1: '0vw',
  x2: '-3vw',
  x3: '-8vw',
  x4: '-1vw',
  x5: '0vw',
  x6: '-1vw',
  x7: '-2vw',
  x8: '-4vw',
  x9: '0vw',
  y1: '-1.5vw',
  y2: '-4vw',
  y3: '-1vw',
  y4: '1vw',
  y5: '-1.5vw',
  y6: '-3vw',
  y7: '.5vw',
  y8: '-.5vw',
  y9: '-1.5vw',
};
const translate4 = {
  x1: '0vw',
  x2: '-3vw',
  x3: '-2vw',
  x4: '-1vw',
  x5: '0vw',
  x6: '-1vw',
  x7: '-2vw',
  x8: '-4vw',
  x9: '0vw',
  y1: '5vw',
  y2: '3vw',
  y3: '5vw',
  y4: '5vw',
  y5: '5.5vw',
  y6: '3vw',
  y7: '2vw',
  y8: '3vw',
  y9: '5vw',
};
const mTranslate1 = {
  x1: '72vw',
  x2: '76vw',
  x3: '75vw',
  x4: '76vw',
  x5: '72vw',
  x6: '73vw',
  x7: '76vw',
  x8: '74vw',
  x9: '72vw',
  y1: '3vw',
  y2: '4vw',
  y3: '6vw',
  y4: '8vw',
  y5: '10vw',
  y6: '11vw',
  y7: '8vw',
  y8: '6vw',
  y9: '3vw',
};
const mTranslate3 = {
  x1: '-5vw',
  x2: '-4vw',
  x3: '-4vw',
  x4: '-7vw',
  x5: '-4vw',
  x6: '-7vw',
  x7: '-6vw',
  x8: '-3vw',
  x9: '-5vw',
  y1: '3vw',
  y2: '4vw',
  y3: '5vw',
  y4: '3vw',
  y5: '4vw',
  y6: '5vw',
  y7: '3vw',
  y8: '5vw',
  y9: '3vw',
};
const mTranslate4 = {
  x1: '-35vw',
  x2: '-34vw',
  x3: '-34vw',
  x4: '-37vw',
  x5: '-34vw',
  x6: '-37vw',
  x7: '-36vw',
  x8: '-33vw',
  x9: '-35vw',
  y1: '-37vw',
  y2: '-34vw',
  y3: '-40vw',
  y4: '-38vw',
  y5: '-38vw',
  y6: '-40vw',
  y7: '-38vw',
  y8: '-37vw',
  y9: '-37vw',
};
const nameLetters = [
  'M',
  'a',
  'r',
  'e',
  'k',
  '',
  'S',
  'z',
  'c',
  'z',
  'e',
  'p',
  'a',
  'ń',
  's',
  'k',
  'i',
];
const titleLetters = [
  'F',
  'r',
  'o',
  'n',
  't',
  '-',
  'e',
  'n',
  'd',
  '',
  'D',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
];
const colors = [
  '#FF003F',
  'gold',
  '#6787E7',
  '#74B72E',
  'orange',
  '',
  'plum',
  '#FF003F',
  'gold',
  '#6787E7',
  '#74B72E',
  'orange',
  'plum',
  '#FF003F',
  'gold',
  '#6787E7',
  '#74B72E',
  'orange',
  'plum',
  '#FF003F',
  'gold',
  '#6787E7',
  '#74B72E',
  'orange',
  'plum',
];
const colors2 = [
  '#f0DB4F',
  '#61DBFB',
  '#68A063',
  '#f0DB4F',
  '#61DBFB',
  '#68A063',
  '#f0DB4F',
  '#61DBFB',
  '#61DBFB',
  '#68A063',
  '#f0DB4F',
  '#61DBFB',
  '#68A063',
  '#f0DB4F',
  '#61DBFB',
  '#68A063',
  '#f0DB4F',
  '#61DBFB',
  '#68A063',
];
const letterAnimationLocks = [];

letterAnimationLocks[0] = null;
const length = nameLetters.length + titleLetters.length + 2;
for (let i = 0; i < length; i++) {
  letterAnimationLocks[i + 1] = null;
}

const Hero = () => {
  const [isLetterHovered, setIsLetterHovered] = useState(0);

  const nameRefs = useMemo(() => {
    const refs = {};
    refs[0] = {};
    const length = nameLetters.length + titleLetters.length + 2;
    for (let i = 0; i < length; i++) {
      refs[i + 1] = React.createRef(null);
    }
    return refs;
  }, [nameLetters]);

  useEffect(() => {
    if (isLetterHovered) {
      nameRefs[isLetterHovered].current = true;
      setIsLetterHovered(null);
      setTimeout(() => {
        nameRefs[isLetterHovered].current = null;
      }, 1000);
    }
  }, [isLetterHovered]);

  const handleMouseEnter = (e) => {
    const letter = e.target.dataset.letter;
    if (letter) {
      const letterNum = Number(letter);
      if (!letterAnimationLocks[letterNum]) {
        setIsLetterHovered(letterNum );
        letterAnimationLocks[letterNum] = true;
        setTimeout(() => {
          letterAnimationLocks[letterNum] = null;
        }, 1000);
      }
    }
  };

  const renderBlobs = () => {
    const blobsProps = [
      {
        color: "gray",
        measure: "33.5vw",
        top: "5vw",
        left: "60vw",
        mMeasure: "48vw",
        mTop: "10px",
        mLeft: "49vw",
        image: 'marek.jpg',
      },
      {
        color: "royalblue",
        measure: "12vw",
        top: "3vw",
        left: "22vw",
        delay: "-3",
        mMeasure: "20vw",
        mTop: "2vw",
        mLeft: "5vw",
        translate: translate1,
        mTranslate: mTranslate1,
      },
      {
        color: "gold",
        measure: "10vw",
        top: "25vw",
        left: "60vw",
        delay: "-5",
        mMeasure: "14vw",
        mLeft: "45vw",
        translate: translate2,
        mTranslate: translate2,
      },
      {
        color: "crimson",
        measure: "13vw",
        top: "4vw",
        left: "85vw",
        delay: "-1",
        mMeasure: "22vw",
        mTop: "40vw",
        mLeft: "75vw",
        translate: translate3,
        mTranslate: mTranslate3,
      }
    ]
    return blobsProps.map((prop) => {
      const {color, measure, top, left, mMeasure, mTop, mLeft, image, translate, mTranslate} = prop;
      return <Blob color={color} measure={measure} top={top} left={left} mMeasure={mMeasure} mTop={mTop} mLeft={mLeft} image={image} translate={translate} mTranslate={mTranslate}></Blob>
    })
  }

  return (
    <>
      <div>
        <H1 role="presentation">
          {nameLetters.map(function (object, i) {
            return object.length === 1 ? (
              <Letter
                onMouseEnter={handleMouseEnter}
                bounce={nameRefs[i + 1].current}
                color={colors[i]}
                data-letter={i + 1}
                key={i}
              >
                {nameLetters[i]}
              </Letter>
            ) : (
              <br key={i}></br>
            );
          })}
        </H1>
        <H2>
          {titleLetters.map(function (object, i) {
            return object.length === 1 ? (
              <Letter
                onMouseEnter={handleMouseEnter}
                bounce={nameRefs[i + 1 + nameLetters.length].current}
                color={colors2[i]}
                data-letter={i + 1 + nameLetters.length}
                key={i + nameLetters.length}
              >
                {titleLetters[i]}
              </Letter>
            ) : (
              <span key={i + nameLetters.length}> </span>
            );
          })}
        </H2>
        <About>
          I'm settled in Ostróda, Poland. I have 3 years of Front-end
          experience. I like to work with React, TypeScript and NodeJS.
          Coding is a neverending challenge that keeps me excited.
        </About>
      </div>
      {renderBlobs()}
      <a
        href="https://github.com/MarekSzczepanski"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Blob
          measure="10vw"
          top="1vw"
          left="55vw"
          mMeasure="18vw"
          mTop="40vw"
          mLeft="75vw"
          translate={translate4}
          mTranslate={mTranslate4}
          image="github.png"
          rotateBack={true}
          borderColor="none"
          cursor="pointer"
          zIndex="2"
        ></Blob>
      </a>
    </>
  );
};

export default Hero;
