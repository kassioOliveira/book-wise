import { InputSearch, SearchContainer } from './styles'

import { FiSearch } from 'react-icons/fi'

interface SearchType {
  searchValue: string
  handleSearch: (value: string) => void
  placeholder: string
  size?: 'small' | 'large'
}

export function Search({
  searchValue,
  handleSearch,
  placeholder = '',
  size = 'small',
}: SearchType) {
  return (
    <SearchContainer size={size}>
      <span>Text :</span>
      <InputSearch
        placeholder={placeholder}
        type="text"
        value={searchValue}
        onChange={({ target }) => handleSearch(target.value)}
      />{' '}
      <FiSearch size={24} />
    </SearchContainer>
  )
}
