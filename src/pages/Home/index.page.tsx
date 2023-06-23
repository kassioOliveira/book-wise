// import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts'
import { LatestRatings } from '@/components/LatestRatings'
import { BookRatings } from '@/components/BookRatings'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <LatestRatings />
      <BookRatings />
    </div>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
