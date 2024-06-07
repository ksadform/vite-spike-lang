import { defineMessage } from "react-intl";

const translations = {
    message1: defineMessage({ defaultMessage: "This is message 1 from component 2" }),
    message2: defineMessage({ defaultMessage: "This is message 2 from component 2" }),
    dynamicMessage: defineMessage({ defaultMessage: "This is {dynamic} message from component 2" }),
    common: defineMessage({ defaultMessage: "This is common message" }),
    message3: defineMessage({defaultMessage: "This is message 3 C2"})
};

export default translations;