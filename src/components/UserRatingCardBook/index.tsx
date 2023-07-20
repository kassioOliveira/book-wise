import React, { useCallback, useState } from 'react'
import {
  CardHeader,
  Container,
  Content,
  Summary,
  TextSummary,
  UserAvatarContainer,
} from './styles'

import Image from 'next/image'

import { Rating, User, Book } from '@prisma/client'
import { Avatar } from '@/components/Avatar'
import Link from 'next/link'
import { getFormattedDate } from '@/utils/getFomattedDate'
import { RatingStars } from '@/components/RatingStars'

type BookRatingsWIthUser = Rating & {
  book: Book
  user: User
}

interface BookRating {
  rating: BookRatingsWIthUser
}

export function UserRatingCardBook({ rating }: BookRating) {
  const [showMore, setShowMore] = useState(false)

  const { book, user } = rating

  const maxLengthCaracter = book.summary.length > 100

  const handleShowMore = useCallback(() => {
    setShowMore((state) => !state)
  }, [])

  return (
    <Container>
      {book && user && (
        <CardHeader>
          <UserAvatarContainer>
            <Link href={'#'}>
              <Avatar
                src={user?.avatar_url ? user?.avatar_url : undefined}
                alt=""
                size="md"
              />
            </Link>
            <div>
              <span>{user.name}</span>
              <span>{getFormattedDate(book.created_at)}</span>
            </div>
          </UserAvatarContainer>
          <RatingStars rate={rating.rate} justSee />
        </CardHeader>
      )}
      <Content>
        <Image src={book.cover_url} width={108} height={152} alt="" />
        <Summary>
          <div>
            <h3>{book.name}</h3>
            <span>{book.author}</span>
          </div>
          <div>
            <TextSummary size={showMore ? 'large' : 'small'}>
              {book.summary} Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. At quasi dolore nihil fugiat animi quisquam culpa inventore?
              Ducimus, sequi nisi?
            </TextSummary>
            {maxLengthCaracter && !showMore ? (
              <button type="button" onClick={handleShowMore}>
                Ver mais
              </button>
            ) : (
              <button type="button" onClick={handleShowMore}>
                Ver menos
              </button>
            )}
          </div>
        </Summary>
      </Content>
    </Container>
  )
}
