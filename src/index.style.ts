import RalewayBold from "./fonts/Raleway/Raleway-Bold.ttf";
import RalewayItalic from "./fonts/Raleway/Raleway-Italic.ttf";
import RalewayMedium from "./fonts/Raleway/Raleway-Medium.ttf";
import RalewayRegular from "./fonts/Raleway/Raleway-Regular.ttf";

const ralewayRegular = {
  fontFamily: "Raleway",
  src: `local('Raleway-Regular'), url(${RalewayRegular}) format('truetype')`,
  fontStyle: "normal",
};

const ralewayBold = {
  fontFamily: "Raleway",
  src: `local('Raleway-Bold'), url(${RalewayBold}) format('truetype')`,
  fontStyle: "normal",
};

const ralewayMedium = {
  fontFamily: "Raleway",
  src: `local('Raleway-Medium'), url(${RalewayMedium}) format('truetype')`,
  fontStyle: "normal",
};

const ralewayItalic = {
  fontFamily: "Raleway",
  src: `local('Raleway-Italic'), url(${RalewayItalic}) format('truetype')`,
  fontStyle: "italic",
};

const globalSelectorStyle = {
  margin: 0,
  padding: 0,
  "box-sizing": "border-box",
};

export const globalStyle = {
  "@global": {
    "@font-face": [ralewayRegular, ralewayBold, ralewayMedium, ralewayItalic],
    "*": {
      ...globalSelectorStyle,
      "&::after": globalSelectorStyle,
      "&::before": globalSelectorStyle,
    },
  },
};
