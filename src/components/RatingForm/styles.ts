import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  background: '$gray700',
  padding: '$6',
  borderRadius: 8,
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const ActionIcon = styled('button', {
  border: 'none',
  backgroundColor: '$gray600',

  variants: {
    buttonType: {
      close: {
        color: '$green200',
      },
      check: {
        color: '$green100',
      },
    },
  },
})

export const TextArea = styled('textarea', {
  backgroundColor: '$gray800',
  border: '1px solid $green100',
  minHeight: '200px',
  maxHeight: '200px',
  '&:focus': {
    border: 'none',
    outline: 0,
  },
  color: '$gray200',
  padding: '$4',
  borderRadius: 8,
  '&::placeholder': {
    color: '$gray400',
  },
})
