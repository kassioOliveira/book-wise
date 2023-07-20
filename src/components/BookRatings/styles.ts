import { styled } from '@/styles/stitches.config'

export const BookRatingsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '$4',
    '> strong': {
      color: '$gray200',
    },

    '> button': {
      border: 'none',
      background: 'transparent',
      color: '$purple100',
      fontSize: '$md',
      cursor: 'pointer',
    },
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})
