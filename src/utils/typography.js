import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "游ゴシック体",
    "游ゴシック",
    "Yu Gothic",
    "Verdana",
    "メイリオ",
    "sans-serif",
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
