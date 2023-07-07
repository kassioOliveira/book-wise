import { styled } from '@/styles/stitches.config'

export const ExploreBookContainer = styled('div', {
  width: '100%',
})

export const HeaderExploreContainer = styled('div', {
  '> div:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '$2 $5',
  },
})

export const TitleContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  '> svg': {
    color: '$green100',
  },
})

export const CategoryContainer = styled('div', {
  display: 'flex',
  gap: '$3',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CategoryItem = styled('div', {
  padding: '$1 $2',
  borderRadius: 30,
  marginTop: '$8',
  marginBottom: '$2',
  border: '1px solid $purple100',
  fontSize: '$md',
  cursor: 'pointer',

  variants: {
    categoryType: {
      selected: {
        color: '$gray100',
        backgroundColor: '$purple100',
      },
      notSelected: {
        color: '$purple100',
        backgroundColor: 'transparent',
      },
    },
  },
})

export const BooksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$5',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$5 $1',
})
