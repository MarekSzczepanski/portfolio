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

const Footer = () => {
  return (
    <FooterContainer>
      <h4>© 2023 Marek Szczepański. All Rights Reserved. </h4>
    </FooterContainer>
  )
}

export default Footer
