import * as React from "react"
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
`
const blackAndWhiteText = () => keyframes`
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
const RotateBack = () => keyframes`
  0% { transform: rotate(360deg); }
  25% { transform: rotate(270deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(90deg); }
  100% { transform: rotate(0deg); }
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
  background: ${props => props.color ? props.color : '#F8F8ff'};
  border: solid 3px ${props => props.border ? props.border : '#000'};
  color: ${props => props.colorChange ? 'white' : 'black'};
  overflow: hidden;
  transform: translate(${props => props.skill ? '-1500px, 150px' : 0}) scale(${props => props.skill ? '0.6' : '1'});
  animation: ${Morph} 10s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.translate && !props.colorChange ? Move(props.translate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.colorChange ? ColorChange() : null} 23s linear infinite, ${props => props.colorChange ? Move2(props.translate) : null} 23s linear infinite;
  z-index: ${props => props.zIndex ? props.zIndex : 0};
  &:hover {
    animation:${Morph} 10s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.translate && !props.colorChange ? Move(props.translate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.colorChange ? ColorChange() : null} 23s linear infinite, ${props => props.colorChange ? Move2(props.translate) : null} 23s linear infinite, ${props => props.colorChange ? blackAndWhiteText : null} .3s linear infinite alternate;
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    position: absolute;
    top: ${props => props.mTop};
    left: ${props => props.mLeft};
    width: ${props => props.mMeasure};
    height: ${props => props.mMeasure};
    animation: ${Morph} 10s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.mTranslate ? Move(props.mTranslate) : null} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
  }
  > div {
    width: 100%;
  }
`
const Text = styled.span`
  animation: ${RotateBack} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
  font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
  @media (max-width: 1023px) {
    font-size: 13px;
  }
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

const Blob = ({ color, measure, top, left, delay, mMeasure, mTop, mLeft, translate, mTranslate, noMove, image, position, border, text, skill, zIndex, fontSize, colorChange }) => {
  return ( 
    <Wrap>
      <Circle measure={measure} color={color} top={top} left={left} delay={delay} mMeasure={mMeasure} mTop={mTop} mLeft={mLeft} translate={translate} mTranslate={mTranslate} noMove={noMove} position={position} border={border} skill={skill} zIndex={zIndex} colorChange={colorChange}>
        {image ? <ProfileImage></ProfileImage> : null}
        {text ? <Text delay={delay} fontSize={fontSize}>{text}</Text> : null}
      </Circle>
    </Wrap>
  )
}

export default Blob;
