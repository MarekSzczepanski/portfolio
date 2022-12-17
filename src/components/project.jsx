import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Blob from './blob';

const morph = () => keyframes`
    0%, 100% { border-radius: 42% 58% 57% 43% / 52% 53% 47% 48%; }
    10% { border-radius: 64% 36% 45% 55% / 42% 40% 60% 58% ; }
    20% { border-radius: 50% 50% 57% 43% / 60% 51% 49% 40%; }
    30% { border-radius: 58% 42% 42% 58% / 52% 41% 59% 48%; }
    40% { border-radius: 39% 61% 38% 62% / 44% 46% 54% 56%; }
    50% { border-radius: 50% 50% 73% 27% / 58% 34% 66% 42%; }
    60% { border-radius: 52% 48% 26% 74% / 45% 73% 27% 60%; }
    70% { border-radius: 54% 46% 47% 53% / 46% 49% 51% 54%; }
    80% { border-radius: 37% 63% 35% 65% / 38% 45% 55% 62%; }
    90% { border-radius: 38% 62% 52% 48% / 45% 53% 47% 55%; }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23.7vw;
    height: 23.7vw;
    margin-top: 2vw;
    padding: 4vw;
    border: solid .23vw transparent;
    border-radius: 50%;
    background-color: ${props => props.color};
    color: ${props => props.fontColor ? props.fontColor : '#fff'};
    transition: border-color .2s ease-in;
    animation: ${morph} 30s linear ${props => props.delay} infinite alternate;
    @media (min-width: 1024px) {
        cursor: pointer;
        &:hover {
            border-color: #000;
        }
    }
    @media (max-width: 1023px) {
        position: relative;
        width: 88vw;
        height: 88vw;
        margin: 9.3vw 0 0 1vw;
    }
`
const H4 = styled.h4`
    margin-top: 1.1vw;
    font-size: 1.7vw;
    text-align: center;
    @media (max-width: 1023px) {
        max-width: 55vw;
        margin-top: 55vw;
        font-size: 6vw;
    }
`

const Project = ({image, customClass, color, text, fontColor, innerBlobColor, delay}) => {
    return (
        <Container color={color} fontColor={fontColor} delay={delay}>
            <Blob position='relative' measure='10vw' mMeasure='37vw' mTop='18vw' mLeft='26vw' image={image} customClass={customClass} color={innerBlobColor} cursor='pointer'></Blob>
            <H4>{text}</H4>
        </Container>
    )
}

export default Project;