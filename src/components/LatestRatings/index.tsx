import { useQuery } from '@tanstack/react-query'
import { UserRatingCardBook } from '../UserRatingCardBook'
import { CardsContainer, Container } from './styles'
import { BsGraphUpArrow } from 'react-icons/bs'
import { api } from '@/lib/axios'
import { Rating, User, Book } from '@prisma/client'

type Bookratings = Rating & {
  book: Book
  user: User
}

export function LatestRatings() {
  const { data } = useQuery({
    queryKey: ['books-ratings'],
    queryFn: async () => {
      const books = await api('/ratings/latest')

      return books
    },
  })
  return (
    <Container>
      <h1>
        <BsGraphUpArrow size={24} />
        Início
      </h1>
      <h2>Avaliações mais recentes</h2>
      <CardsContainer>
        {data?.data &&
          data.data.ratings.map((card: Bookratings) => {
            return <UserRatingCardBook rating={card} key={card.id} />
          })}
      </CardsContainer>
    </Container>
  )
}
