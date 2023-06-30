import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/layouts'
import { ExplorarContainer } from './styles'

import { ExploreBooks } from '@/components/ExploreBooks'

const ExplorarPage: NextPageWithLayout = () => {
  return (
    <ExplorarContainer>
      <ExploreBooks />
    </ExplorarContainer>
  )
}

ExplorarPage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ExplorarPage
