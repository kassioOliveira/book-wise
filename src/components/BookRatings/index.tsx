import { useSession } from 'next-auth/react'
import { BookRatingsContainer } from './styles'
import { useState } from 'react'
import { Rating, User } from '@prisma/client'
import { RatingForm } from '../RatingForm'
import { RatingCard } from './RatingCard'
import { useRouter } from 'next/router'

type RatingWithAuthor = Rating & {
  user: User
}

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export function BookRatings({ bookId, ratings }: BookRatingsProps) {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const router = useRouter()

  const isAuthenticated = status === 'authenticated'

  const handleRate = () => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    setShowForm(true)
  }
  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)

  return (
    <BookRatingsContainer>
      <header>
        <strong>Avaliações</strong>
        {canRate && (
          <>
            <button type="button" onClick={handleRate}>
              Avaliar
            </button>
          </>
        )}
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}

        {sortedRatingsByDate.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  )
}
