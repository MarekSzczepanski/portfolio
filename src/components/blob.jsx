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
const Move = (data = '0') => keyframes`
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
`
const Circle = styled.div`
  position: ${props => props.position ? props.position : 'absolute'};
  top: ${props => props.top ? props.top : '0'};
  left: ${props => props.left ? props.left : '0'};
  width: ${props => props.measure};
  height: ${props => props.measure};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: ${props => props.color};
  overflow: hidden;
  animation: ${Morph} 10s linear infinite ${props => props.delay ? props.delay : null}, ${props => props.noMove ? null : Move(props.translate)} 13s linear infinite;
  @media (max-width: 1023px) {
    position: absolute;
    top: ${props => props.mTop};
    left: ${props => props.mLeft};
    width: ${props => props.mMeasure};
    height: ${props => props.mMeasure};
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

const Blob = ({ color, measure, top, left, delay, mMeasure, mTop, mLeft, translate, noMove, image, position }) => {
    return ( 
        <Wrap>
            <Circle measure={measure} color={color} top={top} left={left} delay={delay} mMeasure={mMeasure} mTop={mTop} mLeft={mLeft} translate={translate} noMove={noMove} position={position}>
                {image ? <ProfileImage></ProfileImage> : null}
            </Circle>
        </Wrap>
    )
}

export default Blob;
