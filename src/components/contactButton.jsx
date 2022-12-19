import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Blob from '../components/blob';
import Form from '../components/form';

const translate = {x1: '75vw', x2: '77vw', x3: '76vw', x4: '80vw', x5: '82vw', x6: '78vw', x7: '81vw', x8: '73vw', x9: '75vw', y1: '29vw', y2: '31vw', y3: '32vw', y4: '34vw', y5: '32vw', y6: '33vw', y7: '33vw', y8: '32vw', y9: '29vw'};
const mTranslate = {x1: '2vw', x2: '7vw', x3: '6vw', x4: '4vw', x5: '8vw', x6: '5vw', x7: '5vw', x8: '9vw', x9: '2vw', y1: '9px', y2: '16px', y3: '14px', y4: '10px', y5: '11px', y6: '18px', y7: '17px', y8: '19px', y9: '9px'};

const morph = () => keyframes`
  0%, 100% { border-radius: 42% 58% 57% 43% / 52% 53% 47% 48%; }
  10% { border-radius: 64% 36% 45% 55% / 42% 40% 60% 58% ; }
  20% { border-radius: 50% 50% 57% 43% / 60% 51% 49% 40%; }
  30% { border-radius: 58% 42% 42% 58% / 52% 41% 59% 48%; }
  40% { border-radius: 39% 61% 38% 62% / 44% 46% 54% 56%; }
  50% { border-radius: 50% 50% 73% 27% / 58% 34% 66% 42%; }
  60% { border-radius: 52% 48% 26% 74% / 45% 73% 27% 60%; }
  70% { border-radius: 54% 46% 47% 53% / 46% 49% 51% 54%; }
  80% { border-radius: 37% 63% 35% 65% / 38% 45% 55% 62%; }
  90% { border-radius: 38% 62% 52% 48% / 45% 53% 47% 55%; }
`
const FormWrap = styled.div`
  display: ${props => props.display === 'false' ? 'none' : 'flex'};
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(50px);
  z-index: 30;
`
const FormContainer = styled.div`
  position: relative;
  width: 95vmin;
  height: 95vmin;
  border-radius: 50%;
  background-color: orange;
  animation: ${morph} 30s linear infinite alternate;
`

const ContactButton = () => {
    const [isContactFormDisplayed, setIsContactFormDisplayed] = useState(false);

    const handleContactBlobClick = () => {
        setIsContactFormDisplayed(!isContactFormDisplayed);
    }

    return (
        <>
            <Blob handleContactBlobClick={handleContactBlobClick} colorChange={true} border='black' text='Contact me' zIndex={3} fontSize='1.3vw' measure='11vw' mMeasure='35vw' translate={translate} mTranslate={mTranslate} cursor='pointer' rotateBack={true}/>
            <FormWrap display={String(isContactFormDisplayed)}>
                <FormContainer>
                    <Form></Form>
                    <div onClick={handleContactBlobClick} onKeyDown={handleContactBlobClick} role='presentation'>
                        <Blob handleContactBlobClick={handleContactBlobClick} text={'\u2718'} rotateBack={false} measure='10vmin' mMeasure='10vmin' top='0' left='90%' fontSize='5vmin' color='royalblue' fontColor='orange' hoverColor='orange' hoverFontColor='royalblue' borderColor='transparent' cursor='pointer'/>
                    </div>
                </FormContainer>
            </FormWrap>
        </>
    )

}

export default ContactButton;
