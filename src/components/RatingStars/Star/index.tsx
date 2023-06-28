import { FaRegStar, FaStar } from 'react-icons/fa'

interface StarProps {
  id: number
  justSee: boolean
  handleChangeRate: (id: number) => void
  starType: 'completed' | 'incompleted'
}

export function Star({ id, justSee, handleChangeRate, starType }: StarProps) {
  if (starType === 'completed') {
    return justSee ? (
      <FaStar style={{ color: '#8381D9' }} size={24} />
    ) : (
      <FaStar
        style={{ color: '#8381D9', cursor: 'pointer' }}
        size={24}
        onClick={() => handleChangeRate(id)}
      />
    )
  }

  if (starType === 'incompleted') {
    return justSee ? (
      <FaRegStar style={{ color: '#8381D9' }} size={24} />
    ) : (
      <FaRegStar
        style={{ color: '#8381D9', cursor: 'pointer' }}
        size={24}
        onClick={() => handleChangeRate(id)}
      />
    )
  }
}
