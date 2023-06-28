import Image from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'md', src, alt }: AvatarProps) {
  const imgHeigth = size === 'md' ? 50 : size === 'sm' ? 35 : 90
  const imgWidth = size === 'md' ? 50 : size === 'sm' ? 35 : 90
  return (
    <AvatarContainer>
      <Image src={src} alt={alt} width={imgWidth} height={imgHeigth} />
    </AvatarContainer>
  )
}
