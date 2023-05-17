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
  }
`;
const H3 = styled.h3`
  @media (max-width: 1023px) {
    text-align: left;
  }
`;
const Container = styled.div`
  padding-bottom: 2vw;
  @media (max-width: 1023px) {
    padding-bottom: 3vw;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
const H5 = styled.h5`
  font-size: 1.5vw;
  @media (max-width: 1023px) {
    margin-top: 0.5vw;
    font-size: 4.7vw;
  }
`;
const H6 = styled.h6`
  padding-bottom: 6px;
  border-bottom: 1px solid;
  font-size: 1.2vw;
  @media (max-width: 1023px) {
    display: inline-block;
    font-size: 4vw;
  }
`;
const Li = styled.li`
  margin-bottom: 4px;
  font-size: 1vw;
  color: #555;
  &:first-of-type {
    margin-top: 4px;
  }
  @media (max-width: 1023px) {
    font-size: 3.1vw;
  }
`;

const Experience = () => (
  <Wrap>
    <H3>Experience</H3>
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
        <Li>Developing custom e-commerce website (HTML + CSS + JS)</Li>
        <Li>Developing Twitch e-commerce extension</Li>
        <Li>Writing unit and e2e tests</Li>
        <Li>Creating and managing Github Actions CI/CD pipeline</Li>
        <Li>Doing simple backend tasks</Li>
        <Li>Managing SQL database</Li>
        <Li>Creating admin dashboard with React</Li>
        <Li>Creating Shopify stores</Li>
        <Li>Creating Landing pages</Li>
        <Li>Creating Three.js animations</Li>
      </ul>
    </Container>
  </Wrap>
);

export default Experience;
