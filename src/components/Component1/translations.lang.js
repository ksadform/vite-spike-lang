import { defineMessage } from 'react-intl';

const translations = {
    message1: defineMessage({ defaultMessage: 'This is message 1 from component 1' }),
    message2: defineMessage({ defaultMessage: 'This is message 2 from component 1' }),
    dynamicMessage: defineMessage({ defaultMessage: 'This is {dynamic} message from component 1' }),
    common: defineMessage({ defaultMessage: 'This is common message blah' }),
    message3: defineMessage({ defaultMessage: 'This is message 3 C1' }),
    withHtml: defineMessage({
        defaultMessage: /*html*/`Hello <br></br> {name}`,
    }),
};

export default translations;




