import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    position: absolute;
    left: 62%;
    width: 37.9%;
    @media (max-width: 1023px) {
        position: static;
        width: 100%;
        margin-top: 9vw;
        margin-left: 0;
        text-align: center;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2vw;
    @media (max-width: 1023px) {
        display: inline-block;
        padding-bottom: 3vw;
    }
`
const H5 = styled.h5`
    font-size: 1.5vw;
    @media (max-width: 1023px) {
        margin-top: .5vw;
        font-size: 4.7vw;
    }
`
const H6 = styled.h6`
    padding-bottom: 6px;
    border-bottom: 1px solid;
    font-size: 1.2vw;
    @media (max-width: 1023px) {
        font-size: 4vw;
    }
`
const Li = styled.li`
    margin-bottom: 4px;
    font-size: 1vw;
    color: #555;
    &:first-of-type {
        margin-top: 4px;
    }
    @media(max-width: 1023px) {
        font-size: 3.1vw;
    }
`

const Experience = () => (
    <Wrap>
        <h3>Experience</h3>
        <Container>
            <H5>Frontend Developer</H5>
            <H6>ZABART.COM | 09.2020 - 07.2021</H6>
            <ul>
                <Li>Creating webpages based on Wordpress</Li>
                <Li>Writing custom Javascript code</Li>
                <Li>Manual testing</Li>
                <Li>Recording tutorial videos</Li>
                <Li>Meetings with clients</Li>
            </ul>
        </Container>
        <Container>
        <H5>Frontend Developer</H5>
        <H6>THINK IT CODE IT LIMITED | 08.2021 – present</H6>
            <ul>
                <Li>Developing e-commerce website (HTML + CSS + JS)</Li>
                <Li>Developing Twitch e-commerce extension</Li>
                <Li>Writing unit and e2e tests</Li>
                <Li>Doing simple backend tasks</Li>
                <Li>Creating and managing CI/CD pipeline</Li>
                <Li>Managing SQL database</Li>
                <Li>Creating an admin dashboard in React</Li>
            </ul>
        </Container>
    </Wrap>
)

export default Experience;
