import Image from 'next/image'
import { Container, LinksContainer } from './styles'

import loginImagePage from '../../assets/login.page.png'

import { LuRocket } from 'react-icons/lu'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const handleSignin = (provider?: string) => {
    if (!provider) {
      router.push('/')
      return
    }
    signIn(provider, {
      callbackUrl: '/',
    })
  }

  return (
    <Container>
      <Image src={loginImagePage} alt="" />
      <LinksContainer>
        <div>
          <button type="button" onClick={() => handleSignin('google')}>
            <FcGoogle size={24} /> Entrar com Google
          </button>
          <button type="button" onClick={() => handleSignin('github')}>
            <FaGithub size={24} /> Entrar com GitHub
          </button>
          <button type="button" onClick={() => handleSignin()}>
            <LuRocket size={24} /> Acessar como visitante
          </button>
        </div>
      </LinksContainer>
    </Container>
  )
}
