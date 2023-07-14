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
      color: '$green100',
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

export const ProfileInformation = styled('div', {
  marginTop: '$10',
  borderLeft: '1px solid $green300',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const HeaderInformation = styled('header', {
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
  fontSize: '',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '> strong': {
      fontSize: '$2xl',
    },
    '> span': {
      color: '$gray400',
    },
  },

  '> hr': {
    margin: '$10 0',
    width: '50px',
    backgroundColor: '$green100',
    border: '1px solid $green100',
  },
})

export const InformationContent = styled('div', {
  width: '65%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '$5',
})

export const InformationBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '$4',
  '> svg': {
    color: '$green100',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',

    '> strong': {
      fontSize: '$lg',
      color: '$gray200',
    },
    '> span': {
      fontSize: '$md',
      color: '$gray300',
    },
  },
})
