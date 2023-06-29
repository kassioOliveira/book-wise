import { Search } from '../Search'
import {
  CategoryContainer,
  CategoryItem,
  HeaderExploreContainer,
  TitleContainer,
} from './styles'

import { PiBinocularsBold } from 'react-icons/pi'

export function HeaderExplore() {
  return (
    <HeaderExploreContainer>
      <div>
        <TitleContainer>
          <PiBinocularsBold size={24} />
          <h1>Explorar</h1>
        </TitleContainer>

        <Search />
      </div>
      <CategoryContainer>
        <CategoryItem categoryType="selected" key={`category-selected`}>
          Tudo
        </CategoryItem>
        {Array.from({ length: 7 }).map((_, category) => {
          return (
            <CategoryItem
              categoryType="notSelected"
              style={{}}
              key={`category-${category}`}
            >
              Computação
            </CategoryItem>
          )
        })}
      </CategoryContainer>
    </HeaderExploreContainer>
  )
}
