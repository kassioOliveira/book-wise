import React from 'react'
import { StarContainer } from './styles'

import { Star } from './Star'

interface RatingStarsProps {
  rate: number
  justSee?: boolean
}

export function RatingStars({ rate, justSee }: RatingStarsProps) {
  const handleChangeRate = (id: number) => {
    console.log(id)
  }
  return (
    <StarContainer>
      {Array.from({ length: 5 }).map((_, id) => {
        return (
          <Star
            key={`star-${id}`}
            handleChangeRate={handleChangeRate}
            id={id}
            justSee={!!justSee}
            starType={rate > id ? 'completed' : 'incompleted'}
          />
        )
      })}
    </StarContainer>
  )
}
