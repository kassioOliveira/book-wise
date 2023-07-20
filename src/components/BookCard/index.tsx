import Image from 'next/image'
import { BookHeader, Container, SummaryBook } from './styles'
import { RatingStars } from '../RatingStars'

import { Book } from '@prisma/client'
import { SidePainel } from '../SidePainel'

interface BookCardProps {
  size: 'large' | 'medium' | 'small'
  book: {
    bookInfo: Book
    rating: number
  }
}

export function BookCard({ size, book: { bookInfo, rating } }: BookCardProps) {
  const imgHeight = size === 'large' ? 130 : size === 'medium' ? 140 : 90
  const imgwidth = size === 'large' ? 98 : size === 'medium' ? 100 : 60
  return (
    <SidePainel bookId={bookInfo.id}>
      <Container size={size}>
        <div>
          <Image
            src={bookInfo.cover_url}
            width={imgwidth}
            height={imgHeight}
            alt=""
          />

          <div>
            <BookHeader>
              <h3>{bookInfo.name}</h3>
              <span>{bookInfo.author}</span>
            </BookHeader>
            <RatingStars rate={rating} justSee />
          </div>
        </div>

        {size === 'large' && <SummaryBook>{bookInfo.summary}</SummaryBook>}
      </Container>
    </SidePainel>
  )
}
