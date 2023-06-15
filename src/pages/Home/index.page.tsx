import { styled } from '@/styles/stitches.config'

const Container = styled('div', {
  color: '$gray300',
})

export default function Home() {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}
