import { useQuery } from '@tanstack/react-query'

import { Container } from './styles'
import { BsGraphUpArrow } from 'react-icons/bs'

export function LatestRatings() {
  const { data } = useQuery({
    queryKey: ['last-ratings'],
    queryFn: () => [],
  })
  console.log(data)
  return (
    <Container>
      <h1>
        <BsGraphUpArrow size={24} />
        Início
      </h1>
      <span>Avaliações mais recentes</span>
    </Container>
  )
}
