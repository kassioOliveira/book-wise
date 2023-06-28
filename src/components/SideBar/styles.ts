import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  backgroundColor: '$purple200',
  width: 234,
  height: 'calc(100% - 40px)',
  margin: 20,
  background: '$gray700 url(`../assets/Background.SideBar.png`)',
  backgroundSize: 'cover',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',

  gap: 24,

  '> h1': {
    margin: '10px auto',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',

    '> span': {
      fontSize: '$sm',
    },
  },
})

export const NavContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  height: '70%',

  '> a': {
    fontSize: '$2xl',
    textDecoration: 'none',
    color: '$gray100',
    padding: 7,
    borderLeft: '5px solid transparent ',
  },
})

export const ButtonAuthentication = styled('button', {
  padding: '$2',
  borderRadius: 8,
  fontSize: '$lg',
  color: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 5,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  '&:hover': {
    backgroundColor: '$gray600',
  },
  variants: {
    colors: {
      green: {
        svg: {
          color: '$green100',
        },
      },
      red: {
        svg: {
          color: 'red',
        },
      },
    },
  },
})
