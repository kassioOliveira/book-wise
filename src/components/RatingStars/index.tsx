import React from 'react'
import { StarContainer } from './styles'

import { Star } from './Star'

interface RatingStarsProps {
  rate: number
  justSee?: boolean
  changeRate?: (newRate: number) => any
}

export function RatingStars({ rate, justSee, changeRate }: RatingStarsProps) {
  const handleChangeRate = (newRate: number) => {
    if (changeRate) {
      changeRate(newRate)
    }
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
