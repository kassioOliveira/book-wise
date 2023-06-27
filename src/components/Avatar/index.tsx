import Image from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'md', src, alt = '' }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={src} alt={alt} width={50} height={50} />
    </AvatarContainer>
  )
}
