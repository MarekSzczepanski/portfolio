import * as React from 'react';
import Image from '../components/Image';
import styled, { keyframes } from 'styled-components';
import Blob from '../components/blob';

const WizardAnimation = () => keyframes`
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
    70% { transform: rotate(-15deg); }
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

export const ChevronLeft = (props) => {
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
    )
}

export const ChevronRight = (props) => {
    return (
        <Image
        src={'right-chevron.png'}
        alt='chevron'
        style={{
            position: 'absolute',
            left: '96.5vw',
            width: '2vw',
            marginTop: '14.3vw',
            opacity: `${props.active ? 1 : .5}`,
            cursor: `${props.active ? 'pointer' : 'default'}`,
            zIndex: '3'
        }}
        />
    )
}

/* Things I like - forest */

export const TreeImage = (props) => {
    return (
        <Image
        src={props.image}
        alt='tree'
        style={{
            width: `${props.width}`,
            height: 'auto',
        }}
        />
    )
}

export  const PathImage = () => {
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
    )
}

export const WizardImage = () => {
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

export const treeContainers = [
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
]

/* Things I like - Web3 */

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

export const BlockchainImage = () => {
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
    )
}

export const DecentralizationImage = () => {
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
    )
}

export const PadlockImage = () => {
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
    )
}

export const TransparencyImage = () => {
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
    )
}

export const CryptocurrenciesImage = () => {
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
    )
}

export const NftImage = () => {
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
    )
}

/* Things I like - Power Metal */

export const transformFromTo = (start, end) => keyframes`
    0%, 100% { transform: ${start}; }
    50% { transform: ${end} }
`

export const weapon = (translateX0, translateX1, translateX2, translateY1, translateY2, rotate1, rotate2, rotate3) => keyframes`
    0%, 90%, 100% { transform: translate(${translateX0}, 0) rotate(${rotate1}); }
    40%, 60% { transform: translate(${translateX1}, ${translateY1}) rotate(${rotate2}); }
    50% { transform: translate(${translateX2}, ${translateY2}) rotate(${rotate3}); }
`

export const helmet = () => keyframes`
    0%, .5%, 16.5%, 52%, 68%, 100% { transform: translateY(0); }
    2.5% { transform: translateY(4vw) rotate(80deg); }
    54% { transform: translateY(4vw) rotate(-80deg); }
`

export const star = () => keyframes`
    0% { transform:  scale(.8); }
    50% { transform: scale(1.2); }
    100% { transform:  scale(.8); }
`

export const thunder = () => keyframes`
    0%, 10%, 30%, 100% { transform: translate(3vw, -7vw) skew(0); }
    14%, 19% { transform: translate(-3vw, 7vw) skew(10deg, -70deg); }
    22% { transform: translate(-2vw, 3vw) skew(0); }
`

export const GuitarImage = () => {
    return (
        <Image
        src={'guitar.png'}
        alt='guitar'
        class='guitar'
        style={{
            animation: 'guitarSecondAnimation 3s ease-out 1.5s infinite'
        }}
        />
    )
}

export const DragonImage = () => {
    return (
        <Image
        src={'dragon.png'}
        alt='dragon'
        style={{

        }}
        />
    )
}

export const DrumsImage = () => {
    return (
        <Image
        src={'drums.png'}
        alt='drums'
        style={{

        }}
        />
    )
}

export const FireImage = () => {
    return (
        <Image
        src={'fire.png'}
        alt='fire'
        style={{
            
        }}
        />
    )
}

export const BassImage = () => {
    return (
        <Image
        src={'bass.png'}
        alt='bass'
        style={{
            animation: 'bassSecondAnimation 3s ease-out 1.5s infinite'
        }}
        />
    )
}

export const UnicornImage = () => {
    return (
        <Image
        src={'unicorn.png'}
        alt='unicorn'
        style={{

        }}
        />
    )
}

export const SingerImage = () => {
    return (
        <Image
        src={'singer.png'}
        alt='singer'
        style={{

        }}
        />
    )
}

export const KnightImage = () => {
    return (
        <Image
        src={'knight.png'}
        alt='knight'
        style={{

        }}
        />
    )
}

export const SwordImage = () => {
    return (
        <Image
        src={'sword.png'}
        alt='sword'
        style={{
            transform: 'translateY(-28%)'
        }}
        />
    )
}

export const HammerImage = () => {
    return (
        <Image
        src={'hammer.png'}
        alt='hammer'
        style={{
            transform: 'translateY(-50%)'
        }}
        />
    )
}

export const CastleImage = () => {
    return (
        <Image
        src={'castle.png'}
        alt='castle'
        style={{

        }}
        />
    )
}

export const ElfImage = () => {
    return (
        <Image
        src={'elf.png'}
        alt='elf'
        style={{

        }}
        />
    )
}

export const DwarfImage = () => {
    return (
        <Image
        src={'dwarf.png'}
        alt='dwarf'
        style={{

        }}
        />
    )
}

export const LightningImage = () => {
    return (
        <Image
        src={'lightning.png'}
        alt='lightning'
        style={{
            transform: 'rotate(30deg)',
            filter: 'hue-rotate(195deg)'
        }}
        />
    )
}

export const NoteImage = () => {
    return (
        <Image
        src={'note.png'}
        alt='note'
        style={{

        }}
        />
    )
}

export const LightImage = () => {
    return (
        <Image
        src={'light.png'}
        alt='light'
        style={{
            filter: 'contrast(125%)'
        }}
        />
    )
}

export const mainPowerMetalImages = [
    {
        image: <DragonImage></DragonImage>,
        grid: '1 / 1 / 2 / 2',
        width: '7vw',
        animation: transformFromTo('translate(0, 0) rotate(-30deg)', 'translate(-2vw, -1vw) rotate(-15deg)'),
        origin: 'bottom'
    },
    {
        image: <GuitarImage></GuitarImage>,
        grid: '1 / 4 / 2 / 5',
        width: '7vw',
        animation: transformFromTo('translate(0, 0) rotate(-30deg)', 'translate(-2vw, -1vw) rotate(0)'),
        origin: 'bottom left'
    },
    {
        image: <DrumsImage></DrumsImage>,
        grid: '2 / 5 / 3 / 6',
        width: '6vw',
        animation: transformFromTo('skewX(-5deg)', 'skewX(5deg)'),
        duration: '.2s',
        timing: 'ease-out',
        origin: '50% 90%'
    },
    {
        image: <KnightImage></KnightImage>,
        grid: '3 / 5 / 4 / 6',
        width: '7vw',
        animation: helmet('45deg')
    },
    {
        image: <BassImage></BassImage>,
        grid: '1 / 6 / 2 / 7',
        width: '6vw',
        animation: transformFromTo('translate(0, 0) rotate(30deg)', 'translate(2vw, -1vw) rotate(0)'),
        origin: 'bottom right'
    },
    {
        image: <SwordImage></SwordImage>,
        grid: '3 / 6 / 4 / 7',
        width: '6vw',
        animation: weapon('-2.5vw', '-2.9vw', '-4.5vw', '.2vw', '1vw', '70deg', '60deg', '-20deg'),
        origin: 'bottom right'
    },
    {
        image: <SingerImage></SingerImage>,
        grid: '1 / 5 / 2 / 6',
        width: '6vw',
        animation: transformFromTo('translate(0, -.5vw)', 'translate(0, -1.5vw)')
    },
    {
        image: <FireImage></FireImage>,
        grid: '3 / 1 / 4 / 2',
        width: '7vw',
        animation: transformFromTo('translate(0, 0) rotate(-15deg)', 'translate(-2vw, -1vw) rotate(-30deg)'),
        origin: 'bottom'
    },
    {
        image: <UnicornImage></UnicornImage>,
        grid: '1 / 9 / 2 / 10',
        width: '7vw',
        animation: transformFromTo('translate(0, 0) rotate(30deg)', 'translate(2vw, -1vw) rotate(15deg)'),
        origin: 'bottom'
    },
    {
        image: <CastleImage></CastleImage>,
        grid: '3 / 9 / 4 / 10',
        width: '7vw',
        animation: transformFromTo('translate(0, 0) rotate(15deg)', 'translate(2vw, -1vw) rotate(30deg)'),
        origin: 'bottom'
    },
    {
        image: <ElfImage></ElfImage>,
        grid: '2 / 2 / 3 / 3',
        width: '6vw',
        animation: transformFromTo('translate(-5vw, 0)', 'translate(10vw, 0)'),
        duration: '6s'
    },
    {
        image: <DwarfImage></DwarfImage>,
        grid: '2 / 8 / 3 / 9',
        width: '6vw',
        animation: transformFromTo('translate(5vw, 0)', 'translate(-10vw, 0)'),
        duration: '6s'
    },
    {
        image: <HammerImage></HammerImage>,
        grid: '3 / 4 / 4 / 5',
        width: '7vw',
        animation: weapon('6.5vw', '6.9vw', '4.5vw', '-.2vw', '1vw', '-70deg', '-60deg', '20deg'),
        delay: '1.5s',
        origin: 'bottom left'
    },
]

export const noteImages = [
    {
        top: '0',
        left: '28vw',
        rotate1: '-20deg',
        rotate2: '-15deg',
        delay: '0s',
    },
    {
        top: '1vw',
        left: '60vw',
        rotate1: '25deg',
        rotate2: '20deg',
        delay: '-2s'
    },
    {
        top: '8vw',
        left: '50vw',
        rotate1: '10deg',
        rotate2: '15deg',
        delay: '-1s'
    },
    {
        top: '11vw',
        left: '37vw',
        rotate1: '-12deg',
        rotate2: '-17deg',
        delay: '-1.5s'
    },
    {
        top: '-3vw',
        left: '45vw',
        rotate1: '-7deg',
        rotate2: '-2deg',
        delay: '-.5s'
    }
]

export const starImages = [
    {
        top: '4vw',
        left: '20vw'
    },
    {
        top: '19vw',
        left: '14vw'
    },
    {
        top: '-4vw',
        left: '63vw'
    },
    {
        top: '22vw',
        left: '60vw'
    }
]

export const lightningImages = [
    {
        top: '8vw',
        left: '3vw',
        delay: '0s'
    },
    {
        top: '20vw',
        left: '24vw',
        delay: '2s'
    },
    {
        top: '8vw',
        left: '47.5vw',
        delay: '1s'
    },
    {
        top: '18vw',
        left: '77vw',
        delay: '2.5s'
    },
    {
        top: '7vw',
        left: '87vw',
        delay: '.5s'
    },
]