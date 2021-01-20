import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

// const typography = new Typography(moragaTheme);

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  // See below for the full list of options.
})

export default typography;
