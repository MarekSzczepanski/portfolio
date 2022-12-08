import * as React from 'react';
import styled from 'styled-components';
import Blob from '../components/blob';

const translate = {x1: '77vw', x2: '73vw', x3: '76vw', x4: '70vw', x5: '72vw', x6: '75vw', x7: '70vw', x8: '73vw', x9: '77vw', y1: '32vw', y2: '35vw', y3: '32vw', y4: '34vw', y5: '32vw', y6: '33vw', y7: '33vw', y8: '32vw', y9: '32vw'};
const mTranslate = {x1: '-4vw', x2: '0vw', x3: '35vw', x4: '60vw', x5: '68vw', x6: '60vw', x7: '35vw', x8: '0vw', x9: '-4vw', y1: '200px', y2: '400px', y3: '450px', y4: '400px', y5: '200px', y6: '50px', y7: '0px', y8: '50px', y9: '200px'};

const ContactButton = () => (
    <Blob colorChange={true} border={'black'} text={'Contact me'} zIndex={3} fontSize={'1.3vw'} measure="11vw" mMeasure="42vw" translate={translate} mTranslate={mTranslate} />
)

export default ContactButton;
