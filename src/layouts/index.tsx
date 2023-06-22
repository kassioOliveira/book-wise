import { ReactNode } from 'react'
import { Container, Content } from './styles'
import { SideBar } from '@/components/SideBar'

interface DefaultLayoutProps {
  children: ReactNode
  title?: string
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  )
}
