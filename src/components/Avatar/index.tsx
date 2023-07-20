import Image from 'next/image'
import { AvatarContainer } from './styles'

import UserSvg from '../../assets/user-icon.svg'

interface AvatarProps {
  src: string | undefined
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'md', src = undefined, alt }: AvatarProps) {
  const imgHeigth = size === 'md' ? 50 : size === 'sm' ? 35 : 90
  const imgWidth = size === 'md' ? 50 : size === 'sm' ? 35 : 90

  const imgSrc = src || UserSvg
  return (
    <AvatarContainer>
      <Image src={imgSrc} alt={alt} width={imgWidth} height={imgHeigth} />
    </AvatarContainer>
  )
}
