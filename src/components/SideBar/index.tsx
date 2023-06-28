import React from 'react'
import { ButtonAuthentication, Container, NavContainer } from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { FiLogIn, FiLogOut } from 'react-icons/fi'

import Logo from '../../assets/Logo.png'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Avatar } from '../Avatar'

import UserSvg from '../../assets/user-icon.svg'

export const SideBar = () => {
  const user = useSession()

  const router = useRouter()

  const { data, status } = user

  const isAuthenticated = status === 'authenticated'

  const handleAuthentication = () => {
    if (isAuthenticated) {
      signOut({
        redirect: true,
        callbackUrl: '/login',
      })
    } else {
      router.push('/login')
    }
  }
  console.log(data?.user.avatar_url)
  return (
    <Container>
      <Image src={Logo} width={128} height={32} alt="" />
      <NavContainer>
        <Link
          href="/"
          style={{
            borderLeftColor:
              router.pathname === '/' ? '#8381D9' : 'transparent',
          }}
        >
          Início
        </Link>
        <Link
          href="/explorar"
          style={{
            borderLeftColor:
              router.pathname === '/explorar' ? '#8381D9' : 'transparent',
          }}
        >
          Explorar
        </Link>
        {isAuthenticated && (
          <Link
            href="/perfil"
            style={{
              borderLeftColor:
                router.pathname === '/perfil' ? '#8381D9' : 'transparent',
            }}
          >
            Perfil
          </Link>
        )}
      </NavContainer>

      <div>
        {isAuthenticated && (
          <Avatar
            src={data?.user.avatar_url ? data?.user.avatar_url : UserSvg}
            alt="foto-perfil"
            size="sm"
          />
        )}
        <span>{isAuthenticated ? `${data?.user.name}` : 'Fazer login'}</span>
        <ButtonAuthentication
          colors={!isAuthenticated ? 'green' : 'red'}
          onClick={handleAuthentication}
          type="button"
        >
          {isAuthenticated ? <FiLogOut size={20} /> : <FiLogIn size={20} />}
        </ButtonAuthentication>
      </div>
    </Container>
  )
}
