import * as React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 110vw;
    margin: 4vw 0 0 -5vw;
    padding: 2.5vw 5vw;
    background-color: orange;
    > a {
      width: 40vw;
      font-size: 1vw;
    }
    > h4 {
      width: 90vw;
    }
    @media (max-width: 1023px) {
      flex-direction: column;
      margin-top: 9.5vw;
      padding: 5vw;
      > a, h4 {
        width: 90vw;
        margin-top: 20px;
        font-size: 2.5vw;
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
      itle: 'decentralized icons',
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
    link: 'https://www.flaticon.com/free-icons/nft',
    title: 'nft icons',
    text: 'Nft icons created by kosonicon - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/electric-guitar',
    title: 'electric guitar icons',
    text: 'Electric guitar icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/unicorn',
    title: 'unicorn icons',
    text: 'Unicorn icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/drum-kit',
    title: 'drum kit icons',
    text: 'Drum kit icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/knight',
    title: 'knight icons',
    text: 'Knight icons created by Nikita Golubev - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/people',
    title: 'people icons',
    text: 'People icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/fire',
    title: 'fire icons',
    text: 'Fire icons created by iconixar - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/guitar',
    title: 'guitar icons',
    text: 'Guitar icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/dragon',
    title: 'dragon icons',
    text: 'Dragon icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/music',
    title: 'music icons',
    text: 'Music icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/hammer',
    title: 'hammer icons',
    text: 'Hammer icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/sword',
    title: 'sword icons',
    text: 'Sword icons created by Iconic Panda - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/thunder',
    title: 'thunder icons',
    text: 'Thunder icons created by Vectors Market - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/castle-tower',
    title: 'castle tower icons',
    text: 'Castle tower icons created by Hamstring - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/white-hair',
    title: 'white hair icons',
    text: 'White hair icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/dwarf',
    title: 'dwarf icons',
    text: 'Dwarf icons created by Flat Icons - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/deer',
    title: 'deer icons',
    text: 'Deer icons created by Chanut-is-Industries - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/deer',
    title: 'deer icons',
    text: 'Deer icons created by Icongeek26 - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/deer',
    title: 'deer icons',
    text: 'Deer icons created by Good Ware - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/cabin',
    title: 'cabin icons',
    text: 'Cabin icons created by Freepik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/hiking',
    title: 'hiking icons',
    text: 'Hiking icons created by monkik - Flaticon'
  },
  {
    link: 'https://www.flaticon.com/free-icons/neural-network',
    title: 'neural network icons',
    text: 'Neural network icons created by Paul J. - Flaticon'
  }
];

const Footer = () => {
  return (
    <FooterContainer>
      <h4>Credits:</h4>
      {credits.map((credit, i) => {
        return <a href={credits[i].link} title={credits[i].title} key={i}>{credits[i].text}</a>
      })}
      <h4>© 2023 Marek Szczepański. All Rights Reserved. </h4>
    </FooterContainer>
  )
}

export default Footer
