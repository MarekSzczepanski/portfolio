import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../components/Image';
import Blob from '../components/blob';

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
    },
    {
        link: 'https://www.flaticon.com/free-icons/right-chevron',
        title: 'right chevron icons',
        text: 'Right chevron icons created by Designkuu - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/blockchain',
      title: 'blockchain icons',
      text: 'Blockchain icons created by Freepik - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/decentralized',
      title: 'decentralized icons',
      text: 'Decentralized icons created by Good Ware - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/security',
      title: 'security icons',
      text: 'Security icons created by Kiranshastry - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/transparency',
      title: 'transparency icons',
      text: 'Transparency icons created by Freepik - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/cryptocurrency',
      title: 'cryptocurrency icons',
      text: 'Cryptocurrency icons created by kosonicon - Flaticon'
    },
    {
      link: 'https://www.flaticon.com/free-icons/cryptocurrency',
      title: 'nft icons',
      text: 'Nft icons created by kosonicon - Flaticon'
    }

    /*
    <a href="https://www.flaticon.com/free-icons/electric-guitar" title="electric guitar icons">Electric guitar icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/unicorn" title="unicorn icons">Unicorn icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/drum-kit" title="drum kit icons">Drum kit icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/knight" title="knight icons">Knight icons created by Nikita Golubev - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/people" title="people icons">People icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/fire" title="fire icons">Fire icons created by iconixar - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/guitar" title="guitar icons">Guitar icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/dragon" title="dragon icons">Dragon icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
    
    
    
    */
];

const Footer = () => {
  return (
    <FooterContainer>
      {credits.map((credit, i) => {
        return <a href={credits[i].link} title={credits[i].title}>{credits[i].text}</a>
      })}
    </FooterContainer>
  )
}

export default Footer
