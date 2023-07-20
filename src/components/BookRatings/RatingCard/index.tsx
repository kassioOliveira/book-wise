import { RatingStars } from '@/components/RatingStars'
import { Container, UserDetails } from './styles'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'
import { useSession } from 'next-auth/react'
import { Rating, User } from '@prisma/client'
import { getFormattedDate } from '@/utils/getFomattedDate'

export type RatingWithAuthor = Rating & {
  user: User
}

type UserRatingCardProps = {
  rating: RatingWithAuthor
}

export const RatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession()
  const distance = getFormattedDate(new Date(rating.created_at), true)

  const isOwner = session?.user?.id === rating.user_id

  return (
    <Container variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt="avatar" src={rating.user.avatar_url!} />
          </Link>
          <div>
            <strong>{rating.user.name}</strong>
            <span>{distance}</span>
          </div>
        </section>

        <RatingStars rate={rating.rate} justSee />
      </UserDetails>

      <p>{rating.description}</p>
    </Container>
  )
}
