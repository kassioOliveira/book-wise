import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  width: '600px',
  minHeight: '280px',
  backgroundColor: '$gray700',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginTop: '$3',
})

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '95%',
  margin: '0 auto',
  marginTop: '$5',
})

export const Content = styled('main', {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '$5',
})

export const Summary = styled('div', {
  width: '430px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div': {
    '> h3': {
      textTransform: 'uppercase',
    },
    '> span': {
      fontSize: '$md',
      color: '$gray300',
      textTransform: 'uppercase',
    },
  },

  ' div:nth-child(2)': {
    marginTop: '$5',
  },

  '> div > button:nth-child(2)': {
    color: '$purple100',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  },
})

export const TextSummary = styled('p', {
  variants: {
    size: {
      small: {
        display: '-webkit-box',
        fontSize: '$md',
        ' -webkit-line-clamp': 3,
        '-webkit-box-orient': ' vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      large: {},
    },
  },
})

export const UserAvatarContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
  },
})
