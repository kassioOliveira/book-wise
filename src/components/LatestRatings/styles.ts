import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  '> h1': {
    display: 'flex',
    gap: 10,

    '> svg': {
      color: '$green100',
    },
  },

  '> h2': {
    marginTop: '$5',
  },
})

export const CardsContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})
