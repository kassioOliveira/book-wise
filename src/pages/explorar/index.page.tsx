import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/layouts'
import { ExplorarContainer } from './styles'
import { HeaderExplore } from '@/components/HeaderExplore'

const ExplorarPage: NextPageWithLayout = () => {
  return (
    <ExplorarContainer>
      <HeaderExplore />
    </ExplorarContainer>
  )
}

ExplorarPage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ExplorarPage
