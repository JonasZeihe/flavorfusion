import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    accent1: "rgba(255, 235, 238, 1)",
    accent2: "rgba(255, 205, 210, 1)",
    accent3: "rgba(244, 67, 54, 1)",
    accent4: "rgba(211, 47, 47, 1)",
    accent5: "rgba(183, 28, 28, 1)",

    primary1: "rgba(255, 248, 225, 1)",
    primary2: "rgba(255, 224, 130, 1)",
    primary3: "rgba(255, 193, 7, 1)",
    primary4: "rgba(255, 160, 0, 1)",
    primary5: "rgba(255, 111, 0, 1)",

    secondary1: "rgba(241, 248, 233, 1)",
    secondary2: "rgba(197, 225, 165, 1)",
    secondary3: "rgba(139, 195, 74, 1)",
    secondary4: "rgba(104, 159, 56, 1)",
    secondary5: "rgba(51, 105, 30, 1)",

    neutral1: "rgba(250, 250, 250, 1)",
    neutral2: "rgba(224, 224, 224, 1)",
    neutral3: "rgba(158, 158, 158, 1)",
    neutral4: "rgba(97, 97, 97, 1)",
    neutral5: "rgba(66, 66, 66, 1)",
    neutral6: "rgba(0, 0, 0, 1)",

    specialBeforeDiscount: "rgba(177, 7, 7, 1)",
  },
  typography: {
    bodyFont: "'Poppins', sans-serif",
    bodySmallFont: "'Assistant', sans-serif",
    buttonFont: "'Montserrat', sans-serif",
    headline1Font: "'Poppins', sans-serif",
    headline2Font: "'Poppins', sans-serif",
    headline3Font: "'Poppins', sans-serif",
  },
  fontSize: {
    body: "18px",
    bodySmall: "14px",
    button: "18px",
    headline1: "48px",
    headline2: "36px",
    headline3: "24px",
  },
  lineHeight: {
    body: "150%",
    bodySmall: "140%",
    button: "24px",
    headline1: "110%",
    headline2: "120%",
    headline3: "130%",
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.bodyFont};
    background-color: ${theme.colors.neutral1};
  }

  :root {
    --accent1: ${theme.colors.accent1};
    --accent2: ${theme.colors.accent2};
    --accent3: ${theme.colors.accent3};
    --accent4: ${theme.colors.accent4};
    --accent5: ${theme.colors.accent5};

    --primary1: ${theme.colors.primary1};
    --primary2: ${theme.colors.primary2};
    --primary3: ${theme.colors.primary3};
    --primary4: ${theme.colors.primary4};
    --primary5: ${theme.colors.primary5};

    --secondary1: ${theme.colors.secondary1};
    --secondary2: ${theme.colors.secondary2};
    --secondary3: ${theme.colors.secondary3};
    --secondary4: ${theme.colors.secondary4};
    --secondary5: ${theme.colors.secondary5};

    --neutral1: ${theme.colors.neutral1};
    --neutral2: ${theme.colors.neutral2};
    --neutral3: ${theme.colors.neutral3};
    --neutral4: ${theme.colors.neutral4};
    --neutral5: ${theme.colors.neutral5};
    --neutral6: ${theme.colors.neutral6};

    --specialBeforeDiscount: ${theme.colors.specialBeforeDiscount};

    --bodyFont: ${theme.typography.bodyFont};
    --bodySmallFont: ${theme.typography.bodySmallFont};
    --buttonFont: ${theme.typography.buttonFont};
    --headline1Font: ${theme.typography.headline1Font};
    --headline2Font: ${theme.typography.headline2Font};
    --headline3Font: ${theme.typography.headline3Font};

    --fontSizeBody: ${theme.fontSize.body};
    --fontSizeBodySmall: ${theme.fontSize.bodySmall};
    --fontSizeButton: ${theme.fontSize.button};
    --fontSizeHeadline1: ${theme.fontSize.headline1};
    --fontSizeHeadline2: ${theme.fontSize.headline2};
    --fontSizeHeadline3: ${theme.fontSize.headline3};

    --lineHeightBody: ${theme.lineHeight.body};
    --lineHeightBodySmall: ${theme.lineHeight.bodySmall};
    --lineHeightButton: ${theme.lineHeight.button};
    --lineHeightHeadline1: ${theme.lineHeight.headline1};
    --lineHeightHeadline2: ${theme.lineHeight.headline2};
    --lineHeightHeadline3: ${theme.lineHeight.headline3};
  }
`;

export default GlobalStyles;
