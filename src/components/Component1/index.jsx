import translations from './translations.lang';
import { FormattedMessage, useIntl } from 'react-intl';

export default function Component1() {
    const intl = useIntl();
    console.log(translations.withHtml);
    return (
        <>
            <h1>Component 1</h1>
            <p>
                <FormattedMessage {...translations.message1} />
            </p>
            <p>
                <FormattedMessage {...translations.message2} />
            </p>

            <p>
                <FormattedMessage
                    {...translations.dynamicMessage}
                    values={{ dynamic: 'THIS IS DYNAMIC' }}
                />
            </p>

            <p>
                <FormattedMessage {...translations.common} />
            </p>

            <p>
                <FormattedMessage {...translations.message3} />
            </p>

            <p>
                <FormattedMessage
                    {...translations.withHtml}
                    values={{
                        name: "bhimsen",
                        br: () => <br />,
                        // i: (chunks) => <i>{chunks}</i>,
                        // k:(c)=> <strong>{c}</strong>
                        // b: (c) => <b>{c}</b>,
                    }}
                />
            </p>
        </>
    );
}
