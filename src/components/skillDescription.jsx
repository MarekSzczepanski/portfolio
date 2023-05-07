import * as React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight} from './gatsbyImages';

const Container = styled.section`
  @media (min-width: 1024px) {
    width: 37.9%;
  }
`
const H4 = styled.h4`
  margin: 2vw 0 1vw;
  font-size: 1.2vw;
  line-height: 1.7vw;
  color: ${props => props.color};
  @media (max-width: 1023px) {
    font-size: 4vw;
    line-height: 5vw;
  }
`
const Ul = styled.ul`
  display: flex;
  transform: translateX(${props => props.translate}vw);
  transition: transform 1s ease-in;
`
const Li = styled.li`
  min-width: 100%;
  margin-right: 10vw;
  list-style-type: none;
  @media (max-width: 1023px) {
    min-width: 90vw;
  }
`
const BulletLi = styled.li`
  font-size: 1vw;
  color: #555;
  @media (max-width: 1023px) {
    font-size: 3.1vw;
  }
`
const P = styled.p`
  font-size: 1vw;
  color: #555;
  @media (max-width: 1023px) {
    font-size: 3.1vw;
  }
`
const skills = [
  {
    heading: 'javascript',
    description: 
    <div>
      <H4 color='#74B72E'>I use Javascript at my everyday's work for various purposes, such as:</H4>
      <ul>
        <BulletLi>Creating 100% custom scripts</BulletLi>
        <BulletLi>Creating and modifying frontend REST endpoints and connecting with backend endpoints</BulletLi>
        <BulletLi>Creating animations based on various events, such as click or scroll</BulletLi>
        <BulletLi>Creating 3D Three.js animations</BulletLi>
        <BulletLi>Adding and modifying functionalities for Wordpress themes and Shopify stores</BulletLi>
        <BulletLi>Developing Twitch e-commerce extension</BulletLi>
        <BulletLi>Creating browser mini games</BulletLi>
      </ul>
      <H4 color='#74B72E'>Some of important aspects of Javascript I understand:</H4>
      <ul>
        <BulletLi>procedural, functional and object oriented</BulletLi>
        <BulletLi>ES6+</BulletLi>
        <BulletLi>Asynchronous</BulletLi>
        <BulletLi>Useful libraries such as Three.js, GSAP, jQuery</BulletLi>
      </ul>
    </div>
  },
  {
    heading: 'react',
    description:
    <div>
      <H4 color='crimson'>I use React for my personal projects and I would love to use it in my work. Some things I made with React:</H4>
      <ul>
        <BulletLi>this portfolio</BulletLi>
        <BulletLi>more SPA webpages</BulletLi>
        <BulletLi>headless cms using Gatsby and Wordpress</BulletLi>
        <BulletLi>cryptocurrency portfolio connected to Coingecko API</BulletLi>
      </ul>
      <H4 color='crimson'>Some of important aspects of React I understand:</H4>
      <ul>
        <BulletLi>hooks</BulletLi>
        <BulletLi>redux + saga</BulletLi>
        <BulletLi>Context API</BulletLi>
        <BulletLi>Styled Components</BulletLi>
        <BulletLi>Gatsby + GraphQL</BulletLi>
        <BulletLi>Material UI</BulletLi>
      </ul>
    </div>
  },
  {
    heading: 'css',
    description:
    <div>
      <H4 color='royalblue'>I am very advanced with css. I use it at my work for various purposes, such as:</H4>
      <ul>
        <BulletLi>Styling custom webpages</BulletLi>
        <BulletLi>Creating animations</BulletLi>
        <BulletLi>Styling Twitch e-commerce extension</BulletLi>
        <BulletLi>Styling Wordpress themes and Shopify stores</BulletLi>
      </ul>
      <H4 color='royalblue'>Some of important aspects of css I understand:</H4>
      <ul>
        <BulletLi>flexbox and grid</BulletLi>
        <BulletLi>animations</BulletLi>
        <BulletLi>RWD</BulletLi>
        <BulletLi>sass + scss</BulletLi>
        <BulletLi>Bootstrap 4</BulletLi>
      </ul>
    </div>
  },
  {
    heading: 'html',
    description:
    <div>
      <P>I know how to use HTML in a <strong>semantic</strong> and <strong>SEO</strong> friendly way.</P>
      <P>I never undersetimate the importance of well structured HTML in terms of it's accessibility, SEO, maintenance and extension.</P>
      <P>I have learnt that quality of HTML impacts quality of further styling and coding.</P>
    </div>
  },
  {
    heading: 'nodejs',
    description:
    <div>
       <H4 color='orange'>I understand how NodeJS and Express work and so far I used them for things like:</H4>
       <ul>
        <BulletLi>Login system</BulletLi>
        <BulletLi>Video uploader app</BulletLi>
        <BulletLi>CRUDs connected to both relational and non-relational databases</BulletLi>
        <BulletLi>Rendering user's generated dynamic content with EJS</BulletLi>
        <BulletLi>Running backend code on both local and remote servers</BulletLi>
       </ul>
    </div>
  },
  {
    heading: 'GIT',
    description:
    <div>
       <H4 color='plum'>I use Git on a daily basis for both work and my personal projects. Some of important aspects of GIT I understand:</H4>
       <ul>
        <BulletLi>Commits: pushing, pulling and reverting</BulletLi>
        <BulletLi>Branches: creating, deleting, merging, resolving conflicts</BulletLi>
        <BulletLi>Pull Requests: describing, reviewing, updating, merging</BulletLi>
        <BulletLi>Github features such as Github Actions and Github Pages</BulletLi>
       </ul>
    </div>
  }
]

const SkillDescription = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [translateChangeValue, setTranslateChangeValue] = useState(43.6);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 1023) setIsMobile(false);
  }, []);

  useEffect(() => {
    if (isMobile) setTranslateChangeValue(100);
    else setTranslateChangeValue(43.6);
  }, [isMobile]);

  const slide = (translateChangeValue, activeSlideValue) => {
    setTranslate(translate + translateChangeValue);
    setActiveSlide(activeSlide + activeSlideValue);
  }

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe && activeSlide < skills.length - 1) slide(translateChangeValue * -1, 1);
    else if (isRightSwipe && activeSlide) slide(translateChangeValue, -1);
  }

  const handleClick = (e, isForward) => {
    e.preventDefault();
    if (isForward && activeSlide < skills.length - 1) slide(translateChangeValue * -1, 1);
    else if (!isForward && activeSlide) slide(translateChangeValue, -1);
  }

  return (
    <Container onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <Ul translate={translate}>
        {skills.map((skill, i) => {
          return <Li key={i}>
            <h3>my {skill.heading}</h3>
            {skill.description}
          </Li>
        })}
      </Ul>
      <div onClick={(e) => handleClick(e)} role='presentation'>
        <ChevronLeft active={activeSlide} width={isMobile ? '5vw' : '2vw'} marginTop='1vw' top={isMobile ? '2.75vw' : '0'} left={isMobile ? '-1.5vw' : '-3.5vw'}></ChevronLeft>
      </div>
      <div onClick={(e) => handleClick(e, true)} role='presentation'>
        <ChevronRight active={activeSlide < skills.length - 1}  width={isMobile ? '5vw' : '2vw'} marginTop='1vw' top={isMobile ? '2.75vw' : '0'} left={isMobile ? '86vw' : '33vw'}></ChevronRight>
      </div>
    </Container>
  )
}

export default SkillDescription
