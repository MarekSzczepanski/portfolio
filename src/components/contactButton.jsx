import * as React from 'react';
import Blob from '../components/blob';

const translate = {x1: '77vw', x2: '73vw', x3: '76vw', x4: '70vw', x5: '72vw', x6: '75vw', x7: '70vw', x8: '73vw', x9: '77vw', y1: '32vw', y2: '35vw', y3: '32vw', y4: '34vw', y5: '32vw', y6: '33vw', y7: '33vw', y8: '32vw', y9: '32vw'};
const mTranslate = {x1: '2vw', x2: '7vw', x3: '16vw', x4: '14vw', x5: '8vw', x6: '5vw', x7: '15vw', x8: '9vw', x9: '2vw', y1: '6px', y2: '16px', y3: '14px', y4: '10px', y5: '11px', y6: '18px', y7: '8px', y8: '9px', y9: '6px'};

const ContactButton = () => (
    <Blob colorChange={true} border={'black'} text={'Contact me'} zIndex={3} fontSize={'1.3vw'} measure="11vw" mMeasure="35vw" translate={translate} mTranslate={mTranslate} />
)

export default ContactButton;
