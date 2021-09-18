import RalewayBold from "./fonts/Raleway/Raleway-Bold.ttf";
import RalewayRegular from "./fonts/Raleway/Raleway-Regular.ttf";

const ralewayRegular = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 400,
  src: `local('Raleway-Regular'), url(${RalewayRegular}) format('truetype')`,
};

const ralewayBold = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: 700,
  src: `local('Raleway-Bold'), url(${RalewayBold}) format('truetype')`,
};

const globalSelectorStyle = {
  margin: 0,
  padding: 0,
  "box-sizing": "border-box",
};

export const globalStyle = {
  "@global": {
    "@font-face": [ralewayRegular, ralewayBold],
    "*": {
      ...globalSelectorStyle,
      "&::after": globalSelectorStyle,
      "&::before": globalSelectorStyle,
    },
  },
};
