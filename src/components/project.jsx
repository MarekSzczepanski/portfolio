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
    width: 22.5vw;
    height: 22.5vw;
    margin-top: 2vw;
    margin-right: 2vw;
    padding: 4vw;
    border-radius: 50%;
    background-color: ${props => props.color};
    color: ${props => props.fontColor ? props.fontColor : '#fff'};
    animation: ${morph} 30s linear ${props => props.delay} infinite alternate;
    cursor: pointer;
`
const H4 = styled.h4`
    margin-top: 1.1vw;
    font-size: 1.5vw;
    text-align: center;
`

const Project = ({image, customClass, color, text, fontColor, innerBlobColor, delay}) => {
    return (
        <Container color={color} fontColor={fontColor} delay={delay}>
            <Blob position='relative' measure='10vw' image={image} customClass={customClass} color={innerBlobColor}></Blob>
            <H4>{text}</H4>
        </Container>
    )
}

export default Project;