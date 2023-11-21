import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from './gatsbyImages';

const Container = styled.section`
  max-width: 100%;
  @media (min-width: 1024px) {
    width: 37.9%;
    margin-left: -5vw;
    padding-left: 5vw;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;
  }
`;
const H4 = styled.h4`
  margin: 2vw 0 1vw;
  padding-right: 1vw;
  font-size: 1.2vw;
  line-height: 1.7vw;
  color: ${(props) => props.color};
  @media (max-width: 1023px) {
    font-size: 4vw;
    line-height: 5vw;
  }
`;
const Ul = styled.ul`
  display: flex;
  transform: translateX(${(props) => props.translate}vw);
  transition: transform 1s ease-in;
`;
const Li = styled.li`
  min-width: 100%;
  margin-right: 10vw;
  list-style-type: none;
  @media (max-width: 1023px) {
    min-width: 90vw;
  }
`;
const BulletLi = styled.li`
  padding-top: 0.4vw;
  font-size: 1vw;
  color: #555;
  @media (max-width: 1023px) {
    font-size: 3.1vw;
  }
`;
const P = styled.p`
  padding-right: 1vw;
  font-size: 1vw;
  color: #555;
  @media (max-width: 1023px) {
    font-size: 3.1vw;
  }
`;
const Span = styled.span`
  font-weight: 600;
`;
const H3 = styled.h3`
  @media (max-width: 1023px) {
    text-align: left;
  }
`;
const Section = styled.section`
  max-width: 95vw;
  @media (max-width: 1023px) {
    padding-bottom: 6vw;
  }
  @media (min-width: 1024px) {
    padding: 3vw 2.5vw 3vw 5vw;
    border-top: ${(props) => (props.isBorderHidden ? null : '1px solid #555')};
  }
`;
const skills = [
  {
    heading: 'javascript',
    description: (
      <div>
        <H4 color="#74B72E">
          I use Javascript at my work for various purposes, such as:
        </H4>
        <ul>
          <BulletLi>Creating 100% custom scripts</BulletLi>
          <BulletLi>
            Creating and modifying front-end REST endpoints and connecting with
            backend endpoints
          </BulletLi>
          <BulletLi>
            Creating animations based on various events, such as click or scroll
          </BulletLi>
          <BulletLi>Creating 3D Three.js animations</BulletLi>
          <BulletLi>Developing Twitch e-commerce extension</BulletLi>
          <BulletLi>Creating browser mini games</BulletLi>
        </ul>
        <H4 color="#74B72E">
          Some of important aspects of Javascript I understand:
        </H4>
        <ul>
          <BulletLi>TypeScript</BulletLi>
          <BulletLi>procedural, functional and object oriented</BulletLi>
          <BulletLi>ES6+</BulletLi>
          <BulletLi>Asynchronous</BulletLi>
          <BulletLi>Useful libraries such as Three.js, GSAP, jQuery</BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'react',
    description: (
      <div>
        <H4 color="crimson">
          I use React at my work and for most of my personal projects. Some
          things I made with React:
        </H4>
        <ul>
          <BulletLi>this portfolio</BulletLi>
          <BulletLi>commercial SPA webpages</BulletLi>
          <BulletLi>headless cms using Gatsby and Wordpress</BulletLi>
          <BulletLi>
            cryptocurrency portfolio connected to Coingecko API
          </BulletLi>
          <BulletLi>population counter app using Redux</BulletLi>
          <BulletLi>
            order charizard app using Redux, React Query, Formik and Pokemon TCG
            API
          </BulletLi>
        </ul>
        <H4 color="crimson">
          Some of important aspects of React I understand:
        </H4>
        <ul>
          <BulletLi>Hooks</BulletLi>
          <BulletLi>Redux + Saga</BulletLi>
          <BulletLi>Context API</BulletLi>
          <BulletLi>Styled Components</BulletLi>
          <BulletLi>Gatsby + GraphQL</BulletLi>
          <BulletLi>Material UI</BulletLi>
          <BulletLi>React Query</BulletLi>
          <BulletLi>Formik</BulletLi>
          <BulletLi>React Testing Library</BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'css',
    description: (
      <div>
        <H4 color="royalblue">
          I am very advanced with css. I use it at my work for various purposes,
          such as:
        </H4>
        <ul>
          <BulletLi>Styling custom webpages</BulletLi>
          <BulletLi>Creating animations</BulletLi>
          <BulletLi>Styling Twitch e-commerce extension</BulletLi>
        </ul>
        <H4 color="royalblue">
          Some of important aspects of css I understand:
        </H4>
        <ul>
          <BulletLi>flexbox and grid</BulletLi>
          <BulletLi>animations</BulletLi>
          <BulletLi>RWD</BulletLi>
          <BulletLi>cross browser issues</BulletLi>
          <BulletLi>sass + scss</BulletLi>
          <BulletLi>Bootstrap 4</BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'html',
    description: (
      <div>
        <P>
          I know how to use HTML in a <strong>semantic</strong> and{' '}
          <strong>SEO</strong> friendly way.
        </P>
        <P>
          I never undersetimate the importance of well structured HTML in terms
          of it's accessibility, SEO, maintenance and extension.
        </P>
        <P>
          I have learnt that quality of HTML impacts quality of further styling
          and coding.
        </P>
      </div>
    ),
  },
  {
    heading: 'nodejs',
    description: (
      <div>
        <H4 color="orange">
          I understand how NodeJS and Express work and so far I used them for
          things like:
        </H4>
        <ul>
          <BulletLi>Login system</BulletLi>
          <BulletLi>Video uploader app</BulletLi>
          <BulletLi>
            CRUDs connected to both relational and non-relational databases
          </BulletLi>
          <BulletLi>
            Rendering user's generated dynamic content with EJS
          </BulletLi>
          <BulletLi>
            Running backend code on both local and remote servers
          </BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'GIT',
    description: (
      <div>
        <H4 color="plum">
          I use Git on a daily basis for both work and my personal projects.
          Some of important aspects of GIT I understand:
        </H4>
        <ul>
          <BulletLi>Commits: pushing, pulling and reverting</BulletLi>
          <BulletLi>
            Branches: creating, deleting, merging, resolving conflicts
          </BulletLi>
          <BulletLi>
            Pull Requests: describing, reviewing, updating, merging
          </BulletLi>
          <BulletLi>
            Github features such as Github Actions and Github Pages
          </BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'Tests',
    description: (
      <div>
        <H4 color="gold">
          Some of important aspects of testing that I can do:
        </H4>
        <ul>
          <BulletLi>Unit tests with Jest and React Testing Library</BulletLi>
          <BulletLi>E2e tests with Cypress</BulletLi>
          <BulletLi>
            Add my tests to ci/cd pipelines such as Github Actions
          </BulletLi>
          <BulletLi>
            Cross-browser and cross-platform functionality testing with tools
            like Browserstack
          </BulletLi>
          <BulletLi>Visual tests with tools like Percy</BulletLi>
        </ul>
      </div>
    ),
  },
  {
    heading: 'English',
    description: (
      <div>
        <P>
          In 2019 I received a TOEIC certificate that confirms my B2 level in
          English.
        </P>
        <P>
          During my recent job, I used my English on a daily basis for
          conversations with native english speakers.
        </P>
      </div>
    ),
  },
  {
    heading: 'Soft Skills',
    description: (
      <div>
        <H4 color="#74B72E">My character traits:</H4>
        <ul>
          <BulletLi>
            <Span>Pro-active communication</Span> - I like to answer questions
            before they are asked.
          </BulletLi>
          <BulletLi>
            <Span>Technical translation</Span> - I am good at explaining
            technical things for non-technical people.
          </BulletLi>
          <BulletLi>
            <Span>Valuable solutions</Span> - I understand that clients require
            lucrative code, not just passion driven development.
          </BulletLi>
          <BulletLi>
            <Span>Developmental developer</Span> - I keep learning in my free
            time, apart from 'just in time learning'.
          </BulletLi>
          <BulletLi>
            <Span>Responsible employee</Span> - I am ready to take on extra
            hours to meet deadlines and deal with emergency.
          </BulletLi>
          <BulletLi>
            <Span>Eager for criticism</Span> - I believe feedback is the key
            factor for effective work and learning.
          </BulletLi>
        </ul>
      </div>
    ),
  },
];

const SkillDescription = () => {
  const initialDesktopTranslate = 39.2;
  const [isMobile, setIsMobile] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [translateChangeValue, setTranslateChangeValue] = useState(
    initialDesktopTranslate
  );
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (window.innerWidth > 1023) setIsMobile(false);
  }, []);

  useEffect(() => {
    if (isMobile) setTranslateChangeValue(100);
    else setTranslateChangeValue(initialDesktopTranslate);
  }, [isMobile]);

  const slide = (translateChangeValue, activeSlideValue) => {
    setTranslate(translate + translateChangeValue);
    setActiveSlide(activeSlide + activeSlideValue);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && activeSlide < skills.length - 1)
      slide(translateChangeValue * -1, 1);
    else if (isRightSwipe && activeSlide) slide(translateChangeValue, -1);
  };

  const handleClick = (e, isForward) => {
    e.preventDefault();
    if (isForward && activeSlide < skills.length - 1)
      slide(translateChangeValue * -1, 1);
    else if (!isForward && activeSlide) slide(translateChangeValue, -1);
  };

  return (
    <Container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Section isBorderHidden={true}>
        <Ul translate={translate}>
          {skills.map((skill, i) => {
            return (
              <Li key={skill.heading}>
                <h3>my {skill.heading}</h3>
                {skill.description}
              </Li>
            );
          })}
        </Ul>
        <div onClick={(e) => handleClick(e)} role="presentation">
          <ChevronLeft
            active={Boolean(activeSlide)}
            width={isMobile ? '5vw' : '2vw'}
            marginTop="1vw"
            top={isMobile ? '2.75vw' : '3vw'}
            left={isMobile ? '-1.5vw' : '1.5vw'}
          ></ChevronLeft>
        </div>
        <div onClick={(e) => handleClick(e, true)} role="presentation">
          <ChevronRight
            active={Boolean(activeSlide < skills.length - 1)}
            width={isMobile ? '5vw' : '2vw'}
            marginTop="1vw"
            top={isMobile ? '2.75vw' : '3vw'}
            left={isMobile ? '86vw' : '33vw'}
          ></ChevronRight>
        </div>
      </Section>
      <Section>
        <H3>My next goals</H3>
        <ul>
          <BulletLi>NextJS</BulletLi>
          <BulletLi>More React!</BulletLi>
          <BulletLi>Never enough of JavaScript</BulletLi>
        </ul>
      </Section>
      <Section>
        <H3>My education</H3>
        <H4>University of Warmia and Mazury in Olsztyn</H4>
        <P>
          Faculty of Agriculture and Forestry -{' '}
          <Span>Engineer of Forestry</Span>
        </P>
      </Section>
      <Section>
        <H3>My dream job</H3>
        <ul>
          <BulletLi>Clear career path</BulletLi>
          <BulletLi>Code reviews included</BulletLi>
          <BulletLi>Being 100% honest</BulletLi>
          <BulletLi>Openly communicating mistakes</BulletLi>
        </ul>
      </Section>
    </Container>
  );
};

export default SkillDescription;
