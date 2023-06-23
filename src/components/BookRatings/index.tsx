import { useQuery } from '@tanstack/react-query'
import { LargeCard } from '../BookCard/LargeCard'
import { Container } from './styles'
import { api } from '@/lib/axios'
import { Rating, User, Book } from '@prisma/client'

type Bookratings = Rating & {
  book: Book
  user: User
}

export function BookRatings() {
  const { data } = useQuery({
    queryKey: ['books-ratings'],
    queryFn: async () => {
      const books = await api('/ratings/latest')

      return books
    },
  })

  console.log(data?.data)
  return (
    <Container>
      {data?.data &&
        data.data.ratings.map((card: Bookratings) => {
          return <LargeCard rating={card} key={card.id} />
        })}
    </Container>
  )
}
