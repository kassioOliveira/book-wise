import { InputSearch, SearchContainer } from './styles'

import { FiSearch } from 'react-icons/fi'

export function Search() {
  return (
    <SearchContainer>
      <span>Text :</span>
      <InputSearch placeholder="Buscar livro ou autor" type="text" />{' '}
      <FiSearch size={24} />
    </SearchContainer>
  )
}
