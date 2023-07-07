import { useQuery } from '@tanstack/react-query'
import { BookCard } from '../BookCard'

import {
  BooksContainer,
  CategoryContainer,
  CategoryItem,
  ExploreBookContainer,
  HeaderExploreContainer,
  TitleContainer,
} from './styles'
import { api } from '@/lib/axios'
import { Book, Category } from '@prisma/client'
import { PiBinocularsBold } from 'react-icons/pi'
import { Search } from '../Search'
import { useState } from 'react'

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

export function ExploreBooks() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data } = useQuery<Category[]>(['categories'], async () => {
    const { data } = await api('/books/categories')

    return data.categories ?? []
  })

  const { data: books } = useQuery<BookWithAvgRating[]>(
    ['books', selectedCategory],
    async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      })

      return data?.books ?? []
    },
  )

  console.log(books)
  console.log(data)

  return (
    <ExploreBookContainer>
      <HeaderExploreContainer>
        <div>
          <TitleContainer>
            <PiBinocularsBold size={24} />
            <h1>Explorar</h1>
          </TitleContainer>

          <Search />
        </div>
        <CategoryContainer>
          <CategoryItem
            categoryType={!selectedCategory ? 'selected' : 'notSelected'}
            key={`category-selected`}
            onClick={() => setSelectedCategory(null)}
          >
            Tudo
          </CategoryItem>
          {data &&
            data?.map(({ id, name }) => {
              return (
                <CategoryItem
                  categoryType={
                    selectedCategory === id ? 'selected' : 'notSelected'
                  }
                  style={{}}
                  key={`category-${id}`}
                  onClick={() => setSelectedCategory(id)}
                >
                  {name}
                </CategoryItem>
              )
            })}
        </CategoryContainer>
      </HeaderExploreContainer>
      <BooksContainer>
        {books &&
          books.map(({ alreadyRead, avgRating, ...bookInfo }) => {
            return (
              <BookCard
                key={bookInfo.id}
                size="medium"
                book={{ bookInfo, rating: avgRating }}
              />
            )
          })}
      </BooksContainer>
    </ExploreBookContainer>
  )
}
