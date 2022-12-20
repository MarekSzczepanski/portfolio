import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Image from '../components/Image';
import Hero from '../components/hero';
import ContactButton from '../components/contactButton';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Project from '../components/project';
import Blob from '../components/blob';

const WizardAnimation = () => keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  70% { transform: rotate(-15deg); }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 4vw;
  @media (max-width: 1023px) {
    margin-top: 9.5vw;
  }
`
const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Wrap = styled.div`
  @media (min-width: 1024px) {
    width: 49.8vw;
  }
}
`
const Footer = styled.footer`
  @media (min-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 110vw;
    margin: 4vw 0 0 -5vw;
    padding: 1vw 5vw;
    background-color: orange;
  }
`
const TreesSection = styled.div`
  position: absolute;
  top: -32.35vw;
  left: 44%;
`
const TreesSectionContainer = styled.div`
  transform: scale(-.7, .7);
`
const TreeContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: scale(-1, 1);
  z-index: ${props => props.zIndex};
`
const WizardContainer = styled.div`
  position: absolute;
  top: 71%;
  left: 37%;
  width: 10vw;
  transform: scale(-1, 1);
  z-index: 24;
  &:hover {
    > div {
      animation: ${WizardAnimation()} .5s ease-in;
    }
  }
`

const TreeImage = (props) => {
  return (
    <Image
    src={props.image}
    alt='tree'
    style={{
      width: `${props.width}`,
      height: 'auto',
    }}
    />
  );
};
const PathImage = () => {
  return (
    <Image
    src={'g.png'}
    alt='path'
    style={{
      width: '70vw',
      height: 'auto',
      margin: '0 auto'
    }}
    />
  );
}
const WizardImage = () => {
  return (
    <WizardContainer>
      <Image
      src={'wizard.png'}
      alt='wizard'
      style={{
        width: '100%',
        height: 'auto'
      }}
    />
    </WizardContainer>
  );
}

const IndexPage = () => (
  <Layout>
    <Hero></Hero>
    <ContactButton></ContactButton>
    <Container>
      <Skills></Skills>
      <Experience></Experience>
    </Container>
    <Wrap>
      <h3>projects</h3>
      <ProjectsContainer>
        <Project color='royalblue' image='btc.png' customClass='project1' text='Crypto Portfolio' delay='-1s' ></Project>
        <Project color='gold' fontColor='#333' innerBlobColor='#eee' image='uploader.png' customClass='project2' text='Video Uploader' delay='-15s'></Project>
        <Project color='crimson' innerBlobColor='#ddd' image='swords.png' customClass='project3' text='Simple Adventure' delay='-6s' ></Project>
      </ProjectsContainer>
    </Wrap>
    <Footer>
      <a href='https://www.flaticon.com/free-icons/upload' title='upload icons' target='_blank' rel='noopener noreferrer'>Upload icons created by Darius Dan - Flaticon</a>
      <a href='https://www.flaticon.com/free-icons/sword' title='sword icons' target='_blank' rel='noopener noreferrer'>Sword icons created by Smashicons - Flaticon</a>
      <a href='https://www.flaticon.com/free-icons/tree' title='tree icons' target='_blank' rel='noopener noreferrer'>Tree icons created by Freepik - Flaticon</a>
      <a href='https://www.flaticon.com/free-icons/wizard' title='wizard icons' target='_blank' rel='noopener noreferrer'>Wizard icons created by Flat Icons - Flaticon</a>
      <TreesSection>
        <TreesSectionContainer>
          <PathImage></PathImage>
          <WizardImage></WizardImage>
          <TreeContainer top={'20vw'} left={'4vw'} zIndex={'25'}>
            <TreeImage image={'tree.png'} width='20vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>
      
          <TreeContainer top={'14.5vw'} left={'20vw'} zIndex={'23'} >
            <TreeImage image={'tree.png'} width='17vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>
     
          <TreeContainer top={'10vw'} left={'37vw'} zIndex={'21'} >
            <TreeImage image={'tree.png'} width='13vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>
     
          <TreeContainer top={'4vw'} left={'47vw'} zIndex={'19'} >
            <TreeImage image={'tree.png'} width='10vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>

          <TreeContainer top={'-2vw'} left={'50vw'} zIndex={'18'}>
            <TreeImage image={'tree.png'} width='7.5vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>
      

          <TreeContainer top={'20.3vw'} left={'34vw'} zIndex={'25'}>
            <TreeImage image={'tree.png'} width='18vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>

          <TreeContainer top={'14vw'} left={'47vw'} zIndex={'24'}>
            <TreeImage image={'tree.png'} width='15vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>

          <TreeContainer top={'7vw'} left={'55.5vw'} zIndex={'23'}>
            <TreeImage image={'tree.png'} width='11vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>

          <TreeContainer top={'0vw'} left={'57vw'} zIndex={'22'}>
            <TreeImage image={'tree.png'} width='9vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>

          <TreeContainer top={'-3.5vw'} left={'55.5vw'} zIndex={'17'}>
            <TreeImage image={'tree.png'} width='6.5vw'></TreeImage>
            <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
            <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
            <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
          </TreeContainer>
        </TreesSectionContainer>
      </TreesSection>
    </Footer>
  </Layout>
)

export const Head = () => <Seo title='Home' />
export default IndexPage
