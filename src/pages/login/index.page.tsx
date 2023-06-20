import Image from 'next/image'
import { Container, LinksContainer } from './styles'

import loginImagePage from '../../assets/login.page.png'
import Link from 'next/link'

import { LuRocket } from 'react-icons/lu'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function Login() {
  return (
    <Container>
      <Image src={loginImagePage} alt="" />
      <LinksContainer>
        <div>
          <Link href="#">
            <FcGoogle size={24} /> Entrar com Google
          </Link>
          <Link href="#">
            <FaGithub size={24} /> Entrar com GitHub
          </Link>
          <Link href="#">
            <LuRocket size={24} /> Acessar como visitante
          </Link>
        </div>
      </LinksContainer>
    </Container>
  )
}
