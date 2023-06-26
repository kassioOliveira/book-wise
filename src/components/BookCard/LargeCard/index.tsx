import React, { useMemo } from 'react'
import {
  CardHeader,
  Container,
  Content,
  StarContainer,
  Summary,
} from './styles'

import { FaStar, FaRegStar } from 'react-icons/fa'
import Image from 'next/image'

import { Rating, User, Book } from '@prisma/client'

type BookRatingsWIthUser = Rating & {
  book: Book
  user: User
}

interface BookRating {
  rating: BookRatingsWIthUser
}

export function LargeCard({ rating }: BookRating) {
  const validStars = useMemo(() => {
    return [1, 2, 3, 4, 0].sort().reverse()
  }, [])

  const { book } = rating
  return (
    <Container>
      <CardHeader>
        <div>
          foto
          <span>Hoje</span>
        </div>
        <StarContainer>
          {validStars &&
            validStars.map((star) => {
              if (star > 0) {
                return <FaStar key={star} size={24} />
              } else {
                return <FaRegStar key={star} size={24} />
              }
            })}
        </StarContainer>
      </CardHeader>
      <Content>
        <Image src={book.cover_url} width={108} height={152} alt="" />
        <Summary>
          <div>
            <h3>titulo do texto</h3>
            <span>Author do texto</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat
            odit reprehenderit doloribus, suscipit nostrum nulla iste maiores
            excepturi corporis minus modi rerum similique sint.
          </p>
        </Summary>
      </Content>
    </Container>
  )
}
