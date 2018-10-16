import Typography from 'typography'

import theme from '@@/theme'
// require('typeface-vollkorn')
// require('typeface-open-sans')

const options = {
  headerFontFamily: [`Vollkorn`, `sans-serif`],
  bodyFontFamily: [`Open Sans`, `sans-serif`],
  headerWeight: 400,
  blockMarginBottom: 0.6,
  baseLineHeight: 1.42,
  baseFontSize: `18px`,
  headerLineHeight: 1.05,
  scaleRatio: 2.6,
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6': {
        color: theme.primary
      },
      a: {
        textDecoration: `none`,
        color: theme.linkColor
        // fontWeight: 700
      }
    }
  }
}

const typography = new Typography(options)

// Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles()
// }
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
