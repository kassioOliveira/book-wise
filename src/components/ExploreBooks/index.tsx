import { useQuery } from '@tanstack/react-query'
import { BookCard } from '../BookCard'
import { HeaderExplore } from '../HeaderExplore'
import { BooksContainer } from './styles'
import { api } from '@/lib/axios'
import { Book } from '@prisma/client'

interface BookWithRating {
  bookInfo: Book
  avgRating: number
}

export function ExploreBooks() {
  const category = 'tudo'

  const { data: books } = useQuery<BookWithRating[]>(
    ['books', category],
    async () => {
      const { data } = await api('/books')

      return data.books ?? []
    },
  )

  return (
    <div>
      <HeaderExplore />
      <BooksContainer>
        {books &&
          books.map(({ bookInfo, avgRating }) => {
            return (
              <BookCard
                key={bookInfo.id}
                size="medium"
                book={{ bookInfo, rating: avgRating }}
              />
            )
          })}
      </BooksContainer>
    </div>
  )
}
