import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/Image';
import Blob from '../components/blob';

const WizardAnimation = () => keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  70% { transform: rotate(-15deg); }
`

const Container = styled.div`
    height: 40.1vw;
`
const SliderContainer = styled.div`
    display: flex;
    position: absolute;
    transform: translateX(${props => props.translate}vw);
    transition: transform .5s ease-in;
    z-index: 2;
`
const Slide = styled.div`
    width: 90vw;
    margin-right: 10vw;
`
const H3 = styled.h3`
  margin-top: 4.6vw;
`
const H4 = styled.h4`
  font-size: 2vw;
  text-align: center;
`
const ChevronLeft = (props) => {
    return (
        <Image
        src={'right-chevron.png'}
        alt='chevron'
        style={{
          position: 'absolute',
          left: '1.5vw',
          width: '2vw',
          marginTop: '14.3vw',
          opacity: `${props.active ? 1 : .5}`,
          transform: 'rotate(180deg)',
          cursor: `${props.active ? 'pointer' : 'default'}`,
          zIndex: '3'
        }}
      />
    );
}
const ChevronRight = (props) => {
    return (
        <Image
        src={'right-chevron.png'}
        alt='chevron'
        style={{
          position: 'absolute',
          left: '96.5vw',
          width: '2vw',
          opacity: `${props.active ? 1 : .5}`,
          cursor: `${props.active ? 'pointer' : 'default'}`,
          zIndex: '3'
        }}
      />
    );
}

const TreesSectionWrap = styled.div`
  position: relative;
  z-index: 2;
`
const TreesSection = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 4.75vw;
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
  left: 38.5%;
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
const treeContainers = [
  {
      top: '20vw',
      left: '5vw',
      zIndex: '25',
      treeWidth: '20vw'
  },
  {
      top: '14.5vw',
      left: '21vw',
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

const Web3Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 2.8vw;
    margin-top: 3.5vw;
`
const Web3Item = styled.div`
    position: relative;
    grid-area: ${props => props.area};
    height: 6.5vw;
    margin: 0 auto;
`
const H5 = styled.h5`
    position: relative;
    height: 2vw;
    margin-top: 2.5vw;
    font-size: 1.3vw;
    text-align: center;
    z-index: 2;
`
const BlockchainImage = () => {
    return (
        <Web3Item area={'1 / 1 / 2 / 2'}>
            <Image
            src={'blockchain.png'}
            alt='Blockchain'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
            />
            <H5>blockchain</H5>
            <Blob color='#FF003F' top='-1.4vw' left='1vw' measure='8vw' position='absolute' delay='-1' zIndex='0'></Blob>
        </Web3Item>
    );
}
const DecentralizationImage = () => {
    return (
        <Web3Item area={'1 / 3 / 2 / 4'}>
            <Image
            src={'decentralization.png'}
            alt='decentralization'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
            />
            <H5>decentralization</H5>
            <Blob color='gold' top='-1.4vw' left='3.3vw' measure='8vw' position='absolute' delay='-7' zIndex='0'></Blob>
        </Web3Item>
    );
}
const PadlockImage = () => {
    return (
        <Web3Item area={'1 / 5 / 2 / 6'}>
            <Image
            src={'padlock.png'}
            alt='padlock'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
            />
            <H5>privacy</H5>
            <Blob color='#6787E7' top='-1.4vw' left='-.5vw' measure='8vw' position='absolute' delay='-5' zIndex='0'></Blob>
        </Web3Item>
    );
}
const TransparencyImage = () => {
    return (
        <Web3Item area={'2 / 2 / 3 / 3'}>
            <Image
            src={'transparency.png'}
            alt='transparency'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
            />
            <H5>transparency</H5>
            <Blob color='#74B72E' top='-1.5vw' left='1.6vw' measure='8vw' position='absolute' delay='-3' zIndex='0'></Blob>
        </Web3Item>
    );
}
const CryptocurrenciesImage = () => {
    return (
        <Web3Item area={'2 / 4 / 3 / 5'}>
            <Image
            src={'cryptocurrencies.png'}
            alt='cryptocurrencies'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
            />
            <H5>cryptocurrencies</H5>
            <Blob color='orange' top='-1.5vw' left='3.3vw' measure='8vw' position='absolute' delay='-8' zIndex='0'></Blob>
        </Web3Item>
    );
}
const NftImage = () => {
    return (
        <Web3Item area={'3 / 3 / 4 / 4'}>
            <Image
            src={'nft.png'}
            alt='nft'
            style={{
                width: '5vw',
                height: 'auto',
                margin: '0 auto',
                zIndex: '2'
            }}
        />
        <H5>nft</H5>
        <Blob color='plum' top='-1.3vw' left='-1.7vw' measure='8vw' position='absolute' delay='-2' zIndex='0'></Blob>
        </Web3Item>
    );
}


const slides = 2;

const ThingsILike = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [sliderTransformValue, setSliderTransformValue] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.currentTarget.dataset.chevron === 'right' && activeSlide < slides) {
            setActiveSlide(activeSlide + 1);
            setSliderTransformValue(sliderTransformValue + activeSlide * -100);

        } else if (e.currentTarget.dataset.chevron === 'left' && activeSlide > 1) {
            setActiveSlide(activeSlide - 1);
            setSliderTransformValue(sliderTransformValue + (activeSlide - 1) * 100);
        }
    }

    return (
        <Container>
            <H3>Things I like</H3>
            <div data-chevron='left' onClick={handleClick}>
                <ChevronLeft active={activeSlide > 1}></ChevronLeft>
            </div>
            <div data-chevron='right' onClick={handleClick}>
                <ChevronRight active={activeSlide < slides}></ChevronRight>
            </div>
            <SliderContainer translate={sliderTransformValue}>
                <Slide>
                    <H4>Web 3</H4>
                    <Web3Container>
                        <BlockchainImage></BlockchainImage>
                        <DecentralizationImage></DecentralizationImage>
                        <PadlockImage></PadlockImage>
                        <TransparencyImage></TransparencyImage>
                        <CryptocurrenciesImage></CryptocurrenciesImage>
                        <NftImage></NftImage>
                    </Web3Container>
                </Slide>
                <Slide>
                    <H4>Forest</H4>
                    <TreesSectionWrap>
                        <TreesSection>
                            <TreesSectionContainer>
                                <PathImage></PathImage>
                                <WizardImage></WizardImage>
                                {treeContainers.map((container, i) => {
                                    return <TreeContainer top={treeContainers[i].top} left={treeContainers[i].left} zIndex={treeContainers[i].zIndex} key={i}>
                                        <TreeImage image={'tree.png'} width={treeContainers[i].treeWidth}></TreeImage>
                                        <Blob color='forestgreen' top='-3%' left='15%' measure='53%' position='absolute' delay='-8'></Blob>
                                        <Blob color='forestgreen' top='13%' left='35%' measure='58%' position='absolute'></Blob>
                                        <Blob color='#74B72E' top='27%' left='9%' measure='43%' position='absolute' delay='-2'></Blob>
                                    </TreeContainer>
                                })}
                            </TreesSectionContainer>
                        </TreesSection>
                    </TreesSectionWrap>
                </Slide>
            </SliderContainer>
        </Container>
    )
}

export default ThingsILike
