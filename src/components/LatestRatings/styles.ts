import { styled } from '@/styles/stitches.config'

export const Container = styled('section', {
  '> h1': {
    display: 'flex',
    gap: 10,

    '> svg': {
      color: '$green100',
    },
  },
})

export const CardsContainer = styled('div', {})
