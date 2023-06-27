import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

export const Content = styled('main', {
  width: '100%',
  height: '100vh',
  maxWidth: 996,
  margin: '0 auto',
  paddingTop: 72,
  overflow: 'hidden',
})
