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
    > h4 {
      width: 90vw;
    }
    @media (max-width: 1023px) {
      flex-direction: column;
      margin-top: 9.5vw;
      padding: 5vw;
      h4 {
        margin-top: 2px;
        font-size: 4.5vw;
        text-align: center;
      }
    }
`

const Footer = () => {
  return (
    <FooterContainer>
      <h4>© 2023 Marek Szczepański</h4>
    </FooterContainer>
  )
}

export default Footer
