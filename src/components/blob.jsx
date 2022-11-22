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
  0% { transform: translate(${translate.x1}, ${translate.y1}) rotate(0deg) scale(1); }
  12.5% { transform: translate(${translate.x2}, ${translate.y2}) rotate(45deg) scale(0.7); }
  25% { transform: translate(${translate.x3}, ${translate.y3}) rotate(90deg) scale(0.6); }
  37.5% { transform: translate(${translate.x4}, ${translate.y4}) rotate(135deg) scale(0.7); }
  50% { transform: translate(${translate.x5}, ${translate.y5}) rotate(180deg) scale(1); }
  62.5% { transform: translate(${translate.x6}, ${translate.y6}) rotate(225deg) scale(0.7); }
  75% { transform: translate(${translate.x7}, ${translate.y7}) rotate(270deg) scale(0.6); }
  87.5% { transform: translate(${translate.x8}, ${translate.y8}) rotate(315deg) scale(0.7); }
  100% { transform: translate(${translate.x9}, ${translate.y9}) rotate(360deg) scale(1); }
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
  overflow: hidden;
  transform: translate(${props => props.skill ? '-1500px, 150px' : 0}) scale(${props => props.skill ? '0.6' : '1'});
  animation: ${Morph} 10s linear infinite ${props => props.delay ? props.delay : 0}s, ${props => props.noMove ? null : Move(props.translate)} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
  z-index: ${props => props.zIndex ? props.zIndex : 0};
  @media (max-width: 1023px) {
    position: absolute;
    top: ${props => props.mTop};
    left: ${props => props.mLeft};
    width: ${props => props.mMeasure};
    height: ${props => props.mMeasure};
  }
  > div {
    width: 100%;
  }
`
const Text = styled.span`
  animation: ${RotateBack} 23s linear infinite ${props => props.delay ? props.delay : 0}s;
  font-size: ${props => props.fontSize ? props.fontSize : '1vw'};
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

const Blob = ({ color, measure, top, left, delay, mMeasure, mTop, mLeft, translate, noMove, image, position, border, text, skill, zIndex, fontSize }) => {
    return ( 
        <Wrap>
            <Circle measure={measure} color={color} top={top} left={left} delay={delay} mMeasure={mMeasure} mTop={mTop} mLeft={mLeft} translate={translate} noMove={noMove} position={position} border={border} skill={skill} zIndex={zIndex}>
                {image ? <ProfileImage></ProfileImage> : null}
                {text ? <Text delay={delay} fontSize={fontSize}>{text}</Text> : null}
            </Circle>
        </Wrap>
    )
}

export default Blob;
