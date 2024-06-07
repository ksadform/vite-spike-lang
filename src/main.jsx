import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app.jsx';
import './index.css';

import { IntlProvider } from 'react-intl';

const supported_lang = {
    fr: 'fr',
    en: 'en',
};

const locale = supported_lang.en;


const loadlocaledata = async (locale) => {
    if (locale === supported_lang.en) return import('../compiled-lang/en.json?raw');
    if (locale === supported_lang.fr) return import('../compiled-lang/fr.json?raw');
    
    return import('../compiled-lang/en.json?raw');
};

const bootstrap = async () => {
  
    let messages = await loadlocaledata(locale);
    messages = JSON.parse(messages.default)

    reactdom.createroot(document.getelementbyid('root')).render(
        <react.strictmode>
            <intlprovider defaultlocale='en' locale={locale} messages={messages}>
                <app />
            </intlprovider>
        </react.strictmode>
    );
};

bootstrap();




// curly - 1
// tag - 