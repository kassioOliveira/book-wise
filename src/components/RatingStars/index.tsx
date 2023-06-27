import React from 'react'
import { StarContainer } from './styles'
import { FaRegStar, FaStar } from 'react-icons/fa'

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
      {Array.from({ length: 5 }).map((_, star) => {
        if (justSee) {
          return star < rate ? (
            <FaStar
              style={{ color: '#8381D9' }}
              key={`star-${star}`}
              size={24}
            />
          ) : (
            <FaRegStar
              style={{ color: '#8381D9' }}
              key={`star-${star}`}
              size={24}
            />
          )
        } else {
          return star < rate ? (
            <FaStar
              onClick={() => handleChangeRate(star)}
              style={{ color: '#8381D9', cursor: 'pointer' }}
              key={`star-${star}`}
              size={24}
            />
          ) : (
            <FaRegStar
              onClick={() => handleChangeRate(star)}
              style={{ color: '#8381D9', cursor: 'pointer' }}
              key={`star-${star}`}
              size={24}
            />
          )
        }
      })}
    </StarContainer>
  )
}
