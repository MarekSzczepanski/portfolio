import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/hero';
import ContactButton from '../components/contactButton';
import Skills from '../components/skills';
import Experience from '../components/experience';
import SkillDescription from '../components/skillDescription';
import Projects from '../components/projects';
import ThingsILike from '../components/thingsILike';
import Footer from '../components/footer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 4vw;
  @media (max-width: 1023px) {
    width: ${(props) => props.mobileWidth};
    flex-direction column;
    margin-top: 9.5vw;
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.width};
    margin-left: ${(props) => props.marginLeft};
  }
`;

function IndexPage() {
  return (
    <Layout>
      <Hero />
      <ContactButton />
      <Container>
        <Skills />
        <Experience />
      </Container>
      <Container width="110vw" mobileWidth="90vw" marginLeft="-5vw">
        <SkillDescription />
        <Projects />
      </Container>
      <ThingsILike />
      <Footer />
    </Layout>
  );
}

export function Head() {
  return <Seo title="Marek Szczepański" />;
}
export default IndexPage;
