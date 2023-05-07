import * as React from 'react';
import Image from '../components/Image';
import styled, { keyframes } from 'styled-components';
import Blob from '../components/blob';

const WalkContainer = styled.div`
    position: absolute;
    top: 71%;
    left: 41%;
    width: 10vw;
    z-index: 24;
`

export const ChevronLeft = (props) => {
    return (
        <Image
        src={'right-chevron.png'}
        alt='chevron'
        style={{
            position: 'absolute',
            top: `${props.top}`,
            left: `${props.left}`,
            width: `${props.width}`,
            marginTop: `${props.marginTop}`,
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
            top: `${props.top}`,
            left: `${props.left}`,
            width: `${props.width}`,
            marginTop: `${props.marginTop}`,
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

export const PathImage = () => {
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

export const WalkImage = () => {
    return (
        <WalkContainer>
            <Image
            src={'walk.png'}
            alt='walk'
            style={{
                width: '100%',
                height: 'auto'
            }}
            />
        </WalkContainer>
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
    {
        top: '-3.5vw',
        left: '45.5vw',
        zIndex: '17',
        treeWidth: '6.5vw'
    },
    {
        top: '1.5vw',
        left: '42vw',
        zIndex: '17',
        treeWidth: '8.5vw'
    },
    {
        top: '6.5vw',
        left: '32vw',
        zIndex: '17',
        treeWidth: '10.5vw'
    },
    {
        top: '4.5vw',
        left: '63vw',
        zIndex: '17',
        treeWidth: '10.5vw'
    },
    {
        top: '-1.5vw',
        left: '38vw',
        zIndex: '16',
        treeWidth: '7vw'
    },
    {
        top: '1vw',
        left: '29vw',
        zIndex: '16',
        treeWidth: '8vw'
    },
    {
        top: '0',
        left: '2vw',
        zIndex: '16',
        treeWidth: '7.7vw'
    },
    {
        top: '-3vw',
        left: '26vw',
        zIndex: '12',
        treeWidth: '6.5vw'
    },
    {
        top: '-5vw',
        left: '20vw',
        zIndex: '12',
        treeWidth: '6vw'
    },
    {
        top: '1.5vw',
        left: '17vw',
        zIndex: '16',
        treeWidth: '8vw'
    },
    {
        top: '18vw',
        left: '-11vw',
        zIndex: '24',
        treeWidth: '19vw'
    },
    {
        top: '16vw',
        left: '-22vw',
        zIndex: '22',
        treeWidth: '17vw'
    },
    {
        top: '8vw',
        left: '-28vw',
        zIndex: '21',
        treeWidth: '14vw'
    },
    {
        top: '21vw',
        left: '-32vw',
        zIndex: '22',
        treeWidth: '19vw'
    },
    {
        top: '3vw',
        left: '-20vw',
        zIndex: '20',
        treeWidth: '10vw'
    },
    {
        top: '0',
        left: '-15vw',
        zIndex: '19',
        treeWidth: '7.5vw'
    },
    {
        top: '1.5vw',
        left: '-8vw',
        zIndex: '19',
        treeWidth: '9vw'
    },
    {
        top: '-2vw',
        left: '13vw',
        zIndex: '19',
        treeWidth: '7vw'
    },
    {
        top: '-3vw',
        left: '7vw',
        zIndex: '12',
        treeWidth: '6.5vw'
    },
    {
        top: '-3vw',
        left: '-2vw',
        zIndex: '12',
        treeWidth: '6.5vw'
    },
    {
        top: '-3vw',
        left: '-9vw',
        zIndex: '12',
        treeWidth: '5.7vw'
    },
    {
        top: '18vw',
        left: '56vw',
        zIndex: '25',
        treeWidth: '18vw'
    },
    {
        top: '20vw',
        left: '92vw',
        zIndex: '25',
        treeWidth: '20vw'
    },
    {
        top: '10vw',
        left: '66vw',
        zIndex: '19',
        treeWidth: '13vw'
    },
    {
        top: '5vw',
        left: '76vw',
        zIndex: '18',
        treeWidth: '10.5vw'
    },
    {
        top: '9vw',
        left: '99vw',
        zIndex: '18',
        treeWidth: '12vw'
    },
    {
        top: '2vw',
        left: '92vw',
        zIndex: '18',
        treeWidth: '10vw'
    },
    {
        top: '-2.5vw',
        left: '86vw',
        zIndex: '11',
        treeWidth: '8vw'
    },
    {
        top: '.7vw',
        left: '72.5vw',
        zIndex: '17',
        treeWidth: '8.5vw'
    },
    {
        top: '-5.3vw',
        left: '66vw',
        zIndex: '15',
        treeWidth: '6vw'
    },
    {
        top: '-3.3vw',
        left: '77vw',
        zIndex: '15',
        treeWidth: '7vw'
    },
    {
        top: '-5.8vw',
        left: '82vw',
        zIndex: '18',
        treeWidth: '5.5vw'
    },
    {
        top: '1vw',
        left: '82vw',
        zIndex: '12',
        treeWidth: '8.5vw'
    },
    {
        top: '-1vw',
        left: '67vw',
        zIndex: '16',
        treeWidth: '8vw'
    },
    {
        top: '-4vw',
        left: '34vw',
        zIndex: '11',
        treeWidth: '6vw'
    },
]

export const DeerImage = () => {
    return (
        <Image
        src={'deer.png'}
        alt='Deer'
        style={{
            position: 'absolute',
            top: '12vw',
            left: '51vw',
            width: '6vw'
        }}
        />
    )
}

export const DeerFemaleImage = () => {
    return (
        <Image
        src={'deer-female.png'}
        alt='Deer female'
        style={{
            position: 'absolute',
            top: '14vw',
            left: '46vw',
            width: '4.5vw',
            transform: 'scale(-1, 1)'
        }}
        />
    )
}

export const DeerBabyImage = () => {
    return (
        <Image
        src={'deer-baby.png'}
        alt='Deer baby'
        style={{
            position: 'absolute',
            top: '15.5vw',
            left: '49.5vw',
            width: '3vw',
            transform: 'scale(-1, 1)'
        }}
        />
    )
}

export const CabinImage = () => {
    return (
        <Image
        src={'cabin.png'}
        alt='cabin'
        style={{
            position: 'absolute',
            top: '6vw',
            left: '75.5vw',
            width: '30.2vw',
            zIndex: '20'
        }}
        />
    )
}

/* Things I like - Web3 */

export const BinaryTextAnimation = keyframes`
    0%, 100% { 
        opacity: 0;
        transform: translateY(0);
    }
    70% { opacity: 0; }
    80%, 95% { opacity: 1; }
    99% {
        opacity: 0;
        transform: translateY(68vw);
    }
`

export const Web3Item = styled.div`
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
export const BlockchainImageMobile = () => {
    return (
        <>
            <Image
            src={'blockchain.png'}
            alt='Blockchain'
            style={{
                width: '40vw',
                height: 'auto',
                margin: '13vw auto 20vw',
                zIndex: '2'
            }}
            />
            <Blob color='plum' measure='60vw' top ='15vw' left='15vw' margin='0 auto'></Blob>
        </>
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

export const NetworkImage = (props) => {
    return (
        <Image 
        src={'neural-network.png'} 
        alt='neural-network'
        style={{
            position: 'absolute',
            top: `${props.top}`,
            left: `${props.left}`,
            width: '14vw',
            zIndex: '-1'
        }}
        />
    )
}

export const networkImages = [
    {
        top: '16vw',
        left: '184.5vw'
    },
    {
        top: '24.75vw',
        left: '184.5vw'
    },
    {
        top: '24.75vw',
        left: '177.5vw'
    },
    {
        top: '20.4vw',
        left: '170.45vw'
    },
    {
        top: '24.75vw',
        left: '163.5vw'
    },
    {
        top: '16vw',
        left: '177.5vw'
    }
]

/* Things I like - Power Metal */

export const transformFromTo = (start, end) => keyframes`
    0%, 100% { transform: ${start}; }
    50% { transform: ${end} }
`

const weapon = (translateX0, translateX1, translateX2, translateY1, translateY2, rotate1, rotate2, rotate3) => keyframes`
    0%, 90%, 100% { transform: translate(${translateX0}, 0) rotate(${rotate1}); }
    40%, 60% { transform: translate(${translateX1}, ${translateY1}) rotate(${rotate2}); }
    50% { transform: translate(${translateX2}, ${translateY2}) rotate(${rotate3}); }
`

const helmet = () => keyframes`
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

export const GuitarImageMobile = () => {
    return (
        <Image
        src={'guitar.png'}
        alt='guitar'
        class='guitar'
        style={{
            width: '50vw',
            margin: '20vw 0 20vw 20vw',
            animation: 'guitarSecondAnimation 4s ease-out 1.5s infinite'
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
            animation: 'bassSecondAnimation 3s ease-out 1.5s infinite',
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
        mTop: '102vw',
        mLeft: '24vw'
    },
    {
        top: '1vw',
        left: '60vw',
        rotate1: '25deg',
        rotate2: '20deg',
        delay: '-2s',
        mTop: '118vw',
        mLeft: '77vw'
    },
    {
        top: '8vw',
        left: '50vw',
        rotate1: '10deg',
        rotate2: '15deg',
        delay: '-1s',
        mTop: '130vw',
        mLeft: '12vw'
    },
    {
        top: '11vw',
        left: '37vw',
        rotate1: '-12deg',
        rotate2: '-17deg',
        delay: '-1.5s',
        mTop: '143vw',
        mLeft: '79vw'
    },
    {
        top: '-3vw',
        left: '45vw',
        rotate1: '-7deg',
        rotate2: '-2deg',
        delay: '-.5s',
        mTop: '168vw',
        mLeft: '34vw'
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