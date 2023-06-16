import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '$10',
})

export const LinksContainer = styled('div', {
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',

    a: {
      color: '$gray100',
      fontSize: '$2xl',
      textDecoration: 'none',
      backgroundColor: '$gray500',
      padding: '$6 $10',
      borderRadius: '$md',
    },

    'a:nth-child(3)': {
      svg: {
        color: '$purple100',
      },
    },
  },
})

export const Box = styled('div', {})
