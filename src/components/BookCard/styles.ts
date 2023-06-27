import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  backgroundColor: '$gray700',
  borderRadius: 8,

  variants: {
    size: {
      large: {
        'div:first-child': {
          width: '600px',
          minHeight: '294px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '$2',
          '> div': {
            display: 'flex',
            gap: '$2',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        },
      },
      medium: {
        width: '300px',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '> div:first-child': {
          height: '170px',
          display: 'flex',
          alignItems: 'center',
          gap: '$3',

          '> div': {
            height: '90%',
            display: 'flex',
            gap: '$2',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        },
      },
      small: {
        'div:first-child': {
          height: '130px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '$2',
          '> div': {
            display: 'flex',
            gap: '$2',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        },
      },
    },
  },
})

export const BookHeader = styled('header', {
  width: '80%',
  '> h3': {
    width: '100$',
    fontSize: '$md',
    whiteSpace: 'nowrap',
    ' -webkit-line-clamp': 1,
    '-webkit-box-orient': ' vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '> span': {
    fontSize: '$sm',
    width: '100$',
    whiteSpace: 'nowrap',
    ' -webkit-line-clamp': 1,
    '-webkit-box-orient': ' vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '$gray400',
  },
})

export const SummaryBook = styled('div', {
  width: '95%',
  textAlign: 'left',
  margin: '$3 auto',
})
