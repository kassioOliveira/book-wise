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

  '> a': {
    fontSize: '$lg',
    textDecoration: 'none',
    color: '$gray100',
    display: 'flex',
    alignItems: 'center',
    gap: 5,

    svg: {
      color: '$green100',
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
    borderLeft: '5px solid $purple100',
  },
})
