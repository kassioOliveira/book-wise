import { styled } from '@/styles/stitches.config'

export const Container = styled('article', {
  width: '600px',
  height: '280px',
  backgroundColor: '$gray700',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

export const CardHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const StarContainer = styled('div', {
  marginRight: '$2',
})

export const Content = styled('main', {
  display: 'flex',
  justifyContent: 'space-evenly',
  border: '1px solid red',
})

export const Summary = styled('div', {
  width: '430px',
  height: '150px',
  border: '1px solid red',
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

  '> p': {
    fontSize: '$md',
  },
})
