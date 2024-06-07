import translations from './translations.lang';
import { useIntl } from 'react-intl';

export default function Component2() {
    const intl = useIntl();
    return (
        <>
            <h1>Component 2</h1>
            <p> {intl.formatMessage(translations.message1)}</p>
            <p> {intl.formatMessage(translations.message2)}</p>
            <p>{intl.formatMessage(translations.dynamicMessage, {dynamic: "THIS IS DYNAMIC"})}</p>
            <p> {intl.formatMessage(translations.common)}</p>
            <p> {intl.formatMessage(translations.message3)}</p>
        </>
    );
}
