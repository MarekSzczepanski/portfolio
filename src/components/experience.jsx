import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 62%;
`

const Experience = () => (
    <>
        <Container>
            <h5>Frontend Developer</h5>
            <h6>ZABART.COM | 09.2020 - 07.2021</h6>
            <ul>
                <li>Creating webpages based on Wordpress</li>
                <li>Writing custom Javascript code</li>
                <li>Manual testing</li>
                <li>Recording tutorial videos</li>
                <li>Meetings with clients</li>
            </ul>
        </Container>
        <Container>
        <h5>Frontend Developer</h5>
        <h6>THINK IT CODE IT LIMITED | 08.2021 – present</h6>
            <ul>
                <li>Developing e-commerce website (HTML + CSS + JS)</li>
                <li>Developing Twitch e-commerce extension</li>
                <li>Writing unit and e2e tests</li>
                <li>Doing simple backend tasks</li>
                <li>Creating and managing CI/CD pipeline</li>
                <li>Managing SQL database</li>
                <li>Creating an admin dashboard in React</li>
            </ul>
        </Container>
    </>
)

export default Experience;
