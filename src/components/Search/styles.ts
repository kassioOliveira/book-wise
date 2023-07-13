import { styled } from '@/styles/stitches.config'

export const SearchContainer = styled('div', {
  variants: {
    size: {
      small: {
        border: '.5px solid $gray400',
        width: '420px',
        height: '48px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '&:focus-within': {
          borderColor: '$gray500',
        },
        '> span': {
          color: '$gray400',
          fontSize: '$sm',
        },
        '> svg': {
          color: '$gray400',
        },
      },
      large: {
        width: '600px',
        border: '.5px solid $gray400',
        height: '48px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '&:focus-within': {
          borderColor: '$gray500',
        },
        '> span': {
          color: '$gray400',
          fontSize: '$sm',
        },
        '> svg': {
          color: '$gray400',
        },
      },
    },
  },
})

export const InputSearch = styled('input', {
  border: 'none',
  width: '80%',
  backgroundColor: 'transparent',
  '&:focus': {
    outline: 'none',
    color: '$gray400',
  },
  '&::placeholder': {
    color: '$gray400',
    fontSize: '$sm',
  },
})
