import { styled } from '@/styles/stitches.config'

export const Container = styled('section', {
  width: '100%',
})

export const TitleContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$5',

  '> h2': {
    fontSize: '$md',
    color: '$gray100',
  },

  '> a': {
    textDecoration: 'none',
    color: '$purple100',
    display: 'flex',
    justifyContent: 'center',
  },
})

export const ContainerBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
