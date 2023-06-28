import Link from 'next/link'
import BookCard from '../BookCard'
import { Container, ContainerBooks, TitleContainer } from './styles'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

import { Book } from '@prisma/client'

interface bookWithRating {
  bookInfo: Book
  avgRating: number
}

export default function PopularBooks() {
  const { data } = useQuery({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const books = await api('/books/popular')

      return books
    },
  })
  return (
    <Container>
      <TitleContainer>
        <h2>Livros populares</h2>
        <Link href={'#'}>
          Ver todos <RiArrowRightSLine size={24} />
        </Link>
      </TitleContainer>
      <ContainerBooks>
        {data?.data.books.map(({ bookInfo, avgRating }: bookWithRating) => {
          return (
            <BookCard
              key={bookInfo.id}
              book={{ bookInfo, rating: avgRating }}
              size="small"
            />
          )
        })}
      </ContainerBooks>
    </Container>
  )
}
