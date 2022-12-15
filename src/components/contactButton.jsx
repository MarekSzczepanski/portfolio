import * as React from 'react';
import Blob from '../components/blob';

const translate = {x1: '75vw', x2: '77vw', x3: '76vw', x4: '80vw', x5: '82vw', x6: '78vw', x7: '81vw', x8: '73vw', x9: '75vw', y1: '29vw', y2: '31vw', y3: '32vw', y4: '34vw', y5: '32vw', y6: '33vw', y7: '33vw', y8: '32vw', y9: '29vw'};
const mTranslate = {x1: '2vw', x2: '7vw', x3: '6vw', x4: '4vw', x5: '8vw', x6: '5vw', x7: '5vw', x8: '9vw', x9: '2vw', y1: '9px', y2: '16px', y3: '14px', y4: '10px', y5: '11px', y6: '18px', y7: '17px', y8: '19px', y9: '9px'};

const ContactButton = () => (
    <Blob colorChange={true} border={'black'} text={'Contact me'} zIndex={3} fontSize={'1.3vw'} measure="11vw" mMeasure="35vw" translate={translate} mTranslate={mTranslate} />
)

export default ContactButton;
