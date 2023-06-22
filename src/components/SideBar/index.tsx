import React from 'react'
import { Container, NavContainer } from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { FiLogIn } from 'react-icons/fi'

import Logo from '../../assets/Logo.png'

export const SideBar = () => {
  return (
    <Container>
      <Image src={Logo} width={128} height={32} alt="" />
      <NavContainer>
        <Link href="#">Início</Link>
        <Link href="#">Explorar</Link>
        <Link href="#">Perfil</Link>
      </NavContainer>

      <Link href="#">
        Fazer Login <FiLogIn size={24} />{' '}
      </Link>
    </Container>
  )
}
