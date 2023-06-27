import Image from 'next/image'
import { BookHeader, Container, SummaryBook } from './styles'
import { RatingStars } from '../RatingStars'
import BookImage from '../../../public/images/books/a-revolucao-dos-bixos.png'

interface BookCardProps {
  size: 'large' | 'medium' | 'small'
}

export default function BookCard({ size = 'small' }: BookCardProps) {
  const imgHeight = size === 'large' ? 130 : size === 'medium' ? 140 : 90
  const imgwidth = size === 'large' ? 98 : size === 'medium' ? 100 : 60

  return (
    <Container size={size}>
      <div>
        <Image src={BookImage} width={imgwidth} height={imgHeight} alt="" />

        <div>
          <BookHeader>
            <h3>A revolução dos bichos</h3>
            <span>George Orwell</span>
          </BookHeader>
          <RatingStars rate={4} justSee />
        </div>
      </div>

      {size === 'large' && (
        <SummaryBook>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          eligendi esse maiores quam quo consequatur.
        </SummaryBook>
      )}
    </Container>
  )
}
