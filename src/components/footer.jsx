import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/Image';
import Blob from '../components/blob';

const WizardAnimation = () => keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  70% { transform: rotate(-15deg); }
`

const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 110vw;
    margin: 4vw 0 0 -5vw;
    padding: 1vw 5vw;
    background-color: orange;
    > a {
      font-size: 1vw;
    }
    @media (max-width: 1023px) {
      margin-top: 9.5vw;
      padding: 5vw;
      > a {
        max-width: 90vw;
        font-size: 3vw;
        text-align: center;
      }
    }
`
const TreesSection = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: -32.35vw;
    left: 44%;
  }
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
    src={'path.png'}
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

const credits = [
    {
        link: 'https://www.flaticon.com/free-icons/upload',
        title: 'upload icons',
        text: 'Upload icons created by Darius Dan - Flaticon'
    },
    {
        link: 'https://www.flaticon.com/free-icons/sword',
        title: 'sword icons',
        text: 'Sword icons created by Smashicons - Flaticon'
    },
    {
        link: 'https://www.flaticon.com/free-icons/tree',
        title: 'tree icons',
        text: 'Tree icons created by Freepik - Flaticon'
    },
    {
        link: 'https://www.flaticon.com/free-icons/wizard',
        title: 'wizard icons',
        text: 'Wizard icons created by Flat Icons - Flaticon'
    }
];

const treeContainers = [
    {
        top: '20vw',
        left: '4vw',
        zIndex: '25',
        treeWidth: '20vw'
    },
    {
        top: '14.5vw',
        left: '20vw',
        zIndex: '23',
        treeWidth: '17vw'
    },
    {
        top: '10vw',
        left: '37vw',
        zIndex: '21',
        treeWidth: '13vw'
    },
    {
        top: '4vw',
        left: '47vw',
        zIndex: '19',
        treeWidth: '10vw'
    },
    {
        top: '-2vw',
        left: '50vw',
        zIndex: '18',
        treeWidth: '7.5vw'
    },
    {
        top: '20.3vw',
        left: '34vw',
        zIndex: '25',
        treeWidth: '18vw'
    },
    {
        top: '14vw',
        left: '47vw',
        zIndex: '24',
        treeWidth: '15vw'
    },
    {
        top: '7vw',
        left: '55.5vw',
        zIndex: '23',
        treeWidth: '11vw'
    },
    {
        top: '0vw',
        left: '57vw',
        zIndex: '22',
        treeWidth: '9vw'
    },
    {
        top: '-3.5vw',
        left: '55.5vw',
        zIndex: '17',
        treeWidth: '6.5vw'
    },
];

const Footer = () => (
    <FooterContainer>
        {credits.map((credit, i) => {
            return <a href={credits[i].link} title={credits[i].title}>{credits[i].text}</a>
        })}
        <TreesSection>
            <TreesSectionContainer>
                <PathImage></PathImage>
                <WizardImage></WizardImage>
                {treeContainers.map((container, i) => {
                    return <TreeContainer top={treeContainers[i].top} left={treeContainers[i].left} zIndex={treeContainers[i].zIndex}>
                        <TreeImage image={'tree.png'} width={treeContainers[i].treeWidth}></TreeImage>
                        <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
                        <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
                        <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
                    </TreeContainer>
                })}
            </TreesSectionContainer>
        </TreesSection>
    </FooterContainer>
)

export default Footer
