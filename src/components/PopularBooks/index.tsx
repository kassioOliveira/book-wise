import Link from 'next/link'
import BookCard from '../BookCard'
import { Container, ContainerBooks, TitleContainer } from './styles'
import { RiArrowRightSLine } from 'react-icons/ri'
export default function PopularBooks() {
  return (
    <Container>
      <TitleContainer>
        <h2>Livros populares</h2>
        <Link href={'#'}>
          Ver todos <RiArrowRightSLine size={24} />
        </Link>
      </TitleContainer>
      <ContainerBooks>
        {Array.from({ length: 4 }).map((_, book) => {
          return <BookCard key={book} />
        })}
      </ContainerBooks>
    </Container>
  )
}
