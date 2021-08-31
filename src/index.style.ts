import Raleway from "./fonts/Raleway/RalewayVariable.ttf";
import RalewayItalic from "./fonts/Raleway/RalewayItalicVariable.ttf";

const raleway = {
  fontFamily: "Raleway",
  src: `url(${Raleway}) format('truetype')`,
  fontStyle: "normal",
};

const ralewayItalic = {
  fontFamily: "Raleway",
  src: `url(${RalewayItalic}) format('truetype')`,
  fontStyle: "italic",
};

const globalSelectorStyle = {
  margin: 0,
  padding: 0,
  "box-sizing": "border-box",
};

export const globalStyle = {
  "@global": {
    "@font-face": [raleway, ralewayItalic],
    "*": {
      ...globalSelectorStyle,
      "&::after": globalSelectorStyle,
      "&::before": globalSelectorStyle,
    },
  },
};
