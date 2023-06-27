// import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts'
import { LatestRatings } from '@/components/LatestRatings'

import { HomeContainer } from './styles'
import PopularBooks from '@/components/PopularBooks'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
