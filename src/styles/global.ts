import { globalCss } from '../styles/stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$black',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
