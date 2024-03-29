import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Blob from '../components/blob';
import {
  ChevronLeft,
  ChevronRight,
  TreeImage,
  PathImage,
  treeContainers,
  BlockchainImage,
  DecentralizationImage,
  PadlockImage,
  TransparencyImage,
  CryptocurrenciesImage,
  NftImage,
  mainPowerMetalImages,
  noteImages,
  transformFromTo,
  NoteImage,
  starImages,
  star,
  LightImage,
  lightningImages,
  thunder,
  LightningImage,
  BinaryTextAnimation,
  NetworkImage,
  networkImages,
  DeerImage,
  DeerFemaleImage,
  DeerBabyImage,
  CabinImage,
  WalkImage,
  BlockchainImageMobile,
  GuitarImageMobile,
} from './gatsbyImages';

const Container = styled.div`
  @media (min-width: 1024px) {
    height: 40.1vw;
  }
  @media (max-width: 1023px) {
    min-height: 280vw;
    margin-top: 10vw;
  }
`;
const DesktopContainer = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
`;
const MobileContainer = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  position: absolute;
  transform: translateX(${(props) => props.translate}vw);
  transition: transform 0.5s ease-in;
  z-index: 2;
`;
const Slide = styled.div`
  width: 90vw;
  margin-right: 10vw;
`;
const H3 = styled.h3`
  margin-top: 4.6vw;
`;
const H4 = styled.h4`
  font-size: 2vw;
  text-align: center;
  @media (max-width: 1023px) {
    font-size: 6vw;
  }
`;
const TreesSectionWrap = styled.div`
  position: relative;
  z-index: 2;
`;
const TreesSection = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 4vw;
    left: 15%;
  }
`;
const TreesSectionContainer = styled.div`
  transform: scale(-0.7, 0.7);
  -webkit-box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
  -moz-box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
  box-shadow: 0px 4px 0px 0px rgba(255, 165, 0, 1);
`;
const TreeContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: scale(-1, 1);
  z-index: ${(props) => props.zIndex};
`;
const Web3Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 2.8vw;
  margin-top: 3.5vw;
`;
const PowerMetalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 3vw;
  position: relative;
  margin-top: 4vw;
  ::before {
    content: '';
    position: absolute;
    top: 11vw;
    left: -5vw;
    width: 3vw;
    height: 19vw;
    background-color: #f8f8ff;
  }
`;
const AnimationWrap = styled.div`
  position: ${(props) => (props.position ? props.position : null)};
  top: ${(props) => (props.top ? props.top : null)};
  left: ${(props) => (props.left ? props.left : null)};
  grid-area: ${(props) => props.grid};
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : null)};
  animation: ${(props) => props.animation}
    ${(props) => (props.duration ? props.duration : '3s')}
    ${(props) => (props.timing ? props.timing : 'linear')}
    ${(props) => (props.delay ? props.delay : '0s')} infinite;
  ${(props) => (props.direction ? props.direction : null)}
  transform-origin: ${(props) => props.origin};
`;
const SkewedBlobContainer = styled.div`
  transform: skew(-68deg, 51deg);
`;

const VerticalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
const verticalTextLetters = [
  '0',
  '1',
  '1',
  '0',
  '0',
  '1',
  '0',
  '1',
  '0',
  '1',
  '0',
  '1',
  '0',
  '1',
  '0',
  '1',
  '1',
  '1',
  '0',
  '1',
];
const VerticalText = styled.div`
  position: absolute;
  top: 0;
  left: 100vw;
  height: 1.3vw;
  font-size: 1.3vw;
  animation: ${BinaryTextAnimation} 6s linear infinite
    ${(props) => props.delay}s;
`;
const TreeWrap = styled.div`
  position: relative;
`;

const slides = 3;
const ThingsILike = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderTransformValue, setSliderTransformValue] = useState(0);

  const handleClick = (e, isForward) => {
    e.preventDefault();
    if (isForward && activeSlide < slides) {
      setActiveSlide(activeSlide + 1);
      setSliderTransformValue(sliderTransformValue - 100);
    } else if (!isForward && activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
      setSliderTransformValue(sliderTransformValue + 100);
    }
  };

  return (
    <Container>
      <H3>Things I like</H3>
      <DesktopContainer>
        <div onClick={(e) => handleClick(e)} role="presentation">
          <ChevronLeft
            active={activeSlide > 1}
            width="2vw"
            marginTop="14.3vw"
            left="1.5vw"
          ></ChevronLeft>
        </div>
        <div onClick={(e) => handleClick(e, true)} role="presentation">
          <ChevronRight
            active={activeSlide < slides}
            width="2vw"
            marginTop="14.3vw"
            left="96.5vw"
          ></ChevronRight>
        </div>
        <SliderContainer translate={sliderTransformValue}>
          <Slide>
            <H4>Forest</H4>
            <TreesSectionWrap>
              <TreesSection>
                <TreesSectionContainer>
                  <WalkImage></WalkImage>
                  <PathImage></PathImage>
                  {treeContainers.map((container, i) => {
                    return (
                      <TreeContainer
                        top={treeContainers[i].top}
                        left={treeContainers[i].left}
                        zIndex={treeContainers[i].zIndex}
                        key={treeContainers[i].top + treeContainers[i].left}
                      >
                        <TreeImage
                          image={'tree.png'}
                          width={treeContainers[i].treeWidth}
                        ></TreeImage>
                        <Blob
                          color="forestgreen"
                          top="-3%"
                          left="15%"
                          measure="53%"
                          position="absolute"
                          delay="-8"
                        ></Blob>
                        <Blob
                          color="forestgreen"
                          top="13%"
                          left="35%"
                          measure="58%"
                          position="absolute"
                        ></Blob>
                        <Blob
                          color="#74B72E"
                          top="27%"
                          left="9%"
                          measure="43%"
                          position="absolute"
                          delay="-2"
                        ></Blob>
                      </TreeContainer>
                    );
                  })}
                  <CabinImage></CabinImage>
                </TreesSectionContainer>
                <DeerImage></DeerImage>
                <DeerFemaleImage></DeerFemaleImage>
                <DeerBabyImage></DeerBabyImage>
              </TreesSection>
            </TreesSectionWrap>
          </Slide>
          <Slide>
            <H4>Web 3</H4>
            <Web3Container>
              <BlockchainImage></BlockchainImage>
              <DecentralizationImage></DecentralizationImage>
              <PadlockImage></PadlockImage>
              <TransparencyImage></TransparencyImage>
              <CryptocurrenciesImage></CryptocurrenciesImage>
              <NftImage></NftImage>
              <VerticalTextContainer top="-30vw" left="13vw">
                {verticalTextLetters.map((letter, i) => {
                  return (
                    <VerticalText delay={i * 0.1} key={i}>
                      {letter}
                    </VerticalText>
                  );
                })}
              </VerticalTextContainer>
              <VerticalTextContainer top="-40vw" left="36vw">
                {verticalTextLetters.map((letter, i) => {
                  return (
                    <VerticalText delay={i * 0.1 - 2} key={i}>
                      {letter}
                    </VerticalText>
                  );
                })}
              </VerticalTextContainer>
              <VerticalTextContainer top="-47vw" left="57vw">
                {verticalTextLetters.map((letter, i) => {
                  return (
                    <VerticalText delay={i * 0.1 - 1} key={i}>
                      {letter}
                    </VerticalText>
                  );
                })}
              </VerticalTextContainer>

              {networkImages.map((image) => {
                return (
                  <NetworkImage
                    top={image.top}
                    left={image.left}
                    key={image.top + image.left}
                  ></NetworkImage>
                );
              })}
            </Web3Container>
          </Slide>
          <Slide>
            <H4>Power Metal music</H4>
            <PowerMetalContainer>
              <SkewedBlobContainer>
                <Blob
                  color="#fffe9e"
                  borderColor="#fffe9e"
                  top="-12.8vw"
                  left="8.5vw"
                  measure="20vw"
                  position="absolute"
                  delay="-8"
                  zIndex="-1"
                ></Blob>
              </SkewedBlobContainer>

              {mainPowerMetalImages.map((image) => {
                return (
                  <AnimationWrap
                    grid={image.grid}
                    width={image.width}
                    animation={image.animation}
                    duration={image.duration}
                    delay={image.delay}
                    timing={image.timing}
                    origin={image.origin}
                    key={image.grid}
                  >
                    {image.image}
                  </AnimationWrap>
                );
              })}
              {noteImages.map((image) => {
                return (
                  <AnimationWrap
                    position="absolute"
                    top={image.top}
                    left={image.left}
                    width={'1.5vw'}
                    animation={transformFromTo(
                      `rotate(${image.rotate1}) translateY(-1vw)`,
                      `rotate(${image.rotate2}) translateY(1vw)`
                    )}
                    delay={image.delay}
                    key={image.top + image.left}
                  >
                    {NoteImage()}
                  </AnimationWrap>
                );
              })}
              {starImages.map((image) => {
                return (
                  <AnimationWrap
                    position="absolute"
                    top={image.top}
                    left={image.left}
                    width={'5vw'}
                    animation={star}
                    duration="6s"
                    key={image.top + image.left}
                  >
                    {LightImage()}
                  </AnimationWrap>
                );
              })}
              {lightningImages.map((image) => {
                return (
                  <AnimationWrap
                    position="absolute"
                    top={image.top}
                    left={image.left}
                    width={'3vw'}
                    animation={thunder}
                    easing="ease-in"
                    delay={image.delay}
                    key={image.top + image.left}
                  >
                    {LightningImage()}
                  </AnimationWrap>
                );
              })}
            </PowerMetalContainer>
          </Slide>
        </SliderContainer>
      </DesktopContainer>
      <MobileContainer>
        <H4>Web 3</H4>
        <BlockchainImageMobile></BlockchainImageMobile>
        <H4>Power Metal Music</H4>
        <GuitarImageMobile></GuitarImageMobile>
        {noteImages.map((image) => {
          return (
            <AnimationWrap
              position="absolute"
              top={image.mTop}
              left={image.mLeft}
              width={'5vw'}
              animation={transformFromTo(
                `rotate(${image.rotate1}) translateY(-1vw)`,
                `rotate(${image.rotate2}) translateY(1vw)`
              )}
              delay={image.delay}
              key={image.mTop + image.mLeft}
            >
              {NoteImage()}
            </AnimationWrap>
          );
        })}
        <H4>Forest</H4>
        <TreeWrap>
          <TreeContainer top={'7vw'} left={'5vw'} zIndex={20}>
            <TreeImage image={'tree.png'} width={'80vw'}></TreeImage>
            <Blob
              color="forestgreen"
              top="-3%"
              left="15%"
              measure="53%"
              position="absolute"
              delay="-8"
            ></Blob>
            <Blob
              color="forestgreen"
              top="13%"
              left="35%"
              measure="58%"
              position="absolute"
            ></Blob>
            <Blob
              color="#74B72E"
              top="27%"
              left="9%"
              measure="43%"
              position="absolute"
              delay="-2"
            ></Blob>
          </TreeContainer>
        </TreeWrap>
      </MobileContainer>
    </Container>
  );
};

export default ThingsILike;
