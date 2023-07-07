import { InputSearch, SearchContainer } from './styles'

import { FiSearch } from 'react-icons/fi'

interface SearchType {
  searchValue: string
  handleSearch: (value: string) => void
}

export function Search({ searchValue, handleSearch }: SearchType) {
  return (
    <SearchContainer>
      <span>Text :</span>
      <InputSearch
        placeholder="Buscar livro ou autor"
        type="text"
        value={searchValue}
        onChange={({ target }) => handleSearch(target.value)}
      />{' '}
      <FiSearch size={24} />
    </SearchContainer>
  )
}
