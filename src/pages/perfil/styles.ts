import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('section', {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '1fr 308px',
})

export const Container = styled('div', {
  width: '100%',
})

export const HeaderProfile = styled('header', {
  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: '$8',
    gap: '$3',

    '> svg': {
      color: '$green200',
    },
  },
})

export const RatedBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$7',
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  justifyContent: 'center',
  alignItems: 'start',
  '> span': {
    color: '$gray300',
  },
})

export const ProfileInformation = styled('div', {})
