import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  )
}

export function Home() {
  const { data } = useSession()

  if (!data) {
    return <h1>not authenticated</h1>
  }
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
      <button onClick={() => signOut()}>deslogar</button>
    </pre>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
