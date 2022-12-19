import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/Image'

const Morph = keyframes`
  0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 57% 43% 40% 60% / 71% 48% 52% 29%; }
  50% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
  67% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
  80% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
  100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
`
const Move = (translate) => keyframes`
  0% { transform: translate(${translate.x1}, ${translate.y1}) rotate(0deg) scale(1);}
  12.5% { transform: translate(${translate.x2}, ${translate.y2}) rotate(45deg) scale(0.7);}
  25% { transform: translate(${translate.x3}, ${translate.y3}) rotate(90deg) scale(0.6);}
  37.5% { transform: translate(${translate.x4}, ${translate.y4}) rotate(135deg) scale(0.7);}
  50% { transform: translate(${translate.x5}, ${translate.y5}) rotate(180deg) scale(1);}
  62.5% { transform: translate(${translate.x6}, ${translate.y6}) rotate(225deg) scale(0.7);}
  75% { transform: translate(${translate.x7}, ${translate.y7}) rotate(270deg) scale(0.6);}
  87.5% { transform: translate(${translate.x8}, ${translate.y8}) rotate(315deg) scale(0.7);}
  100% { transform: translate(${translate.x9}, ${translate.y9}) rotate(360deg) scale(1);}
`
const Move2 = (translate) => keyframes`
  0% { transform: translate(${translate.x1}, ${translate.y1}) rotate(0deg) scale(.8, .6);}
  12.5% { transform: translate(${translate.x2}, ${translate.y2}) rotate(45deg) scale(.9, .6);}
  25% { transform: translate(${translate.x3}, ${translate.y3}) rotate(90deg) scale(1.1, .7);}
  37.5% { transform: translate(${translate.x4}, ${translate.y4}) rotate(135deg) scale(1.2, .6);}
  50% { transform: translate(${translate.x5}, ${translate.y5}) rotate(180deg) scale(.9, .6);}
  62.5% { transform: translate(${translate.x6}, ${translate.y6}) rotate(225deg) scale(1, .7);}
  75% { transform: translate(${translate.x7}, ${translate.y7}) rotate(270deg) scale(1, .7);}
  87.5% { transform: translate(${translate.x8}, ${translate.y8}) rotate(315deg) scale(.7, .6);}
  100% { transform: translate(${translate.x9}, ${translate.y9}) rotate(360deg) scale(.8, .6);}
  @media (max-width: 1023px) {
    0% { transform: translate(${translate.x1}, ${translate.y1}) rotate(0deg) scale(.9, .7);}
    12.5% { transform: translate(${translate.x2}, ${translate.y2}) rotate(45deg) scale(1, .8);}
    25% { transform: translate(${translate.x3}, ${translate.y3}) rotate(90deg) scale(1.1, .9);}
    37.5% { transform: translate(${translate.x4}, ${translate.y4}) rotate(135deg) scale(1.1, .8);}
    50% { transform: translate(${translate.x5}, ${translate.y5}) rotate(180deg) scale(1, .9);}
    62.5% { transform: translate(${translate.x6}, ${translate.y6}) rotate(225deg) scale(1.1, .8);}
    75% { transform: translate(${translate.x7}, ${translate.y7}) rotate(270deg) scale(1, .9);}
    87.5% { transform: translate(${translate.x8}, ${translate.y8}) rotate(315deg) scale(.8, .9);}
    100% { transform: translate(${translate.x9}, ${translate.y9}) rotate(360deg) scale(.9, .7);}
  }
`
const BlackAndWhiteText = () => keyframes`
  from {color: white}
  to {color: black}
`
const ColorChange = () => keyframes`
  0% { background-color: crimson; }
  10% { background-color: crimson; }
  15% { background-color: gold; }
  25% { background-color: gold; }
  30% { background-color: royalblue; }
  40% { background-color: royalblue; }
  45% { background-color: #74B72E; }
  55% { background-color: #74B72E; }
  60% { background-color: orange; }
  70% { background-color: orange; }
  75% { background-color: plum; }
  80% { background-color: plum; }
  85% { background-color: #F0DB4F; }
  87% { background-color: #F0DB4F; }
  89% { background-color: #61DBFB; }
  91% { background-color: #61DBFB; }
  93% {background-color: #68A063; }
  95% {background-color: #68A063; }
  100% {background-color: crimson; }
`
const RotateBack = (forceResizeRestart) => keyframes`
  0% { transform: rotate(360deg); }
  25% { transform: rotate(270deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(90deg); }
  100% { transform: rotate(${forceResizeRestart}); }
`
const Wrap = styled.div`
  display: flex;
  align-items: center;
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${props => props.position ? props.position : 'absolute'};
  top: ${props => props.top ? props.top : '0'};
  left: ${props => props.left ? props.left : '0'};
  width: ${props => props.measure};
  height: ${props => props.measure};
  margin: ${props => props.margin};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: ${props => props.color ? props.color : '#F8F8ff'};
  border: solid .23vw ${props => props.border ? props.border : '#000'};
  color: ${props => props.colorChange ? 'white' : 'black'};
  overflow: hidden;
  transform: translate(${props => props.skill ? '-1500px, 150px' : 0}) scale(${props => props.skill ? '0.6' : '1'});
  transition: background-color .2s ease-in, color .2s ease-in;
  animation: 
  ${Morph} 11.5s linear infinite ${props => props.delay ? props.delay : 0}s,
  ${props => props.translate && !props.colorChange ? Move(props.translate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s,
  ${props => props.colorChange ? ColorChange() : null} 23s linear infinite,
  ${props => props.colorChange ? Move2(props.translate) : null} 23s linear infinite;
  cursor: ${props => props.cursor ? props.cursor : 'default'};
  z-index: ${props => props.zIndex ? props.zIndex : 0};
  @media (min-width: 1024px) {
    &:hover {
      > span {
        ${props => !props.colorChange ? 'color: royalblue' : null};
      }
      ${props => props.noRotateBack ? 'background-color: orange' : null};
      animation: 
      ${Morph} 11.5s linear infinite ${props => props.delay ? props.delay : 0}s, 
      ${props => props.translate && !props.colorChange ? Move(props.translate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s, 
      ${props => props.colorChange ? ColorChange() : null} 23s linear infinite, 
      ${props => props.colorChange ? Move2(props.translate) : null} 23s linear infinite,
      ${props => props.colorChange ? BlackAndWhiteText() : null} .3s linear infinite alternate;
    }
  }
  @media (max-width: 1023px) {
    position: absolute;
    top: ${props => props.mTop};
    left: ${props => props.mLeft};
    width: ${props => props.mMeasure};
    height: ${props => props.mMeasure};
    border-width: 3px;
    animation: 
    ${Morph} 11.5s linear infinite ${props => props.delay ? props.delay : 0}s,
    ${props => props.colorChange ? ColorChange() : null} 23s linear infinite,
    ${props => props.colorChange ? Move2(props.mTranslate) : null} 23s linear infinite alternate,
    ${props => props.mTranslate && !props.colorChange ? Move(props.mTranslate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
    }
  }
  > div {
    width: 100%;
  }
`
const Text = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
  animation: ${RotateBack('0deg')} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
  @media (max-width: 1023px) {
    font-size: 4vw;
    animation: ${RotateBack(0)} 23s linear infinite ${props => props.delay ? props.delay : 0}s ${props => props.colorChange ? 'alternate' : null};
  }
`
const StaticText = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
  color: ${props => props.fontColor ? props.fontColor : '#000'}; 
  transition: color .2s ease-in;
`

const ProfileImage = (props) => {
  return (
    <Image
      src={props.image}
      className={props.customClass}
      alt='profile'
      style={{
        height: '100%'
      }}
    />
  );
};

const Blob = ({
  measure,
  mMeasure,
  color,
  fontSize,
  fontColor,
  position,
  top,
  left,
  mTop,
  mLeft,
  translate,
  mTranslate,
  delay,
  borderColor,
  borderColorHover,
  skill,
  zIndex,
  colorChange,
  image,
  customClass,
  text,
  handleContactBlobClick,
  noRotateBack,
  cursor
}) => {
  return ( 
    <Wrap onClick={handleContactBlobClick}>
      <Circle 
      measure={measure}
      mMeasure={mMeasure}
      color={color}
      position={position}
      top={top}
      left={left}
      mTop={mTop}
      mLeft={mLeft}
      translate={translate}
      mTranslate={mTranslate}
      delay={delay}
      border={borderColor}
      borderHover={borderColorHover}
      skill={skill}
      zIndex={zIndex}
      colorChange={colorChange}
      noRotateBack={noRotateBack}
      cursor={cursor}>
        {image ? <ProfileImage image={image} customClass={customClass}></ProfileImage> : null}
        {text && !noRotateBack ? <Text delay={delay} fontSize={fontSize} colorChange={colorChange}>{text}</Text> : null}
        {text && noRotateBack ? <StaticText fontSize={fontSize} fontColor={fontColor}>{text}</StaticText> : null}
      </Circle>
    </Wrap>
  )
}

export default Blob;
