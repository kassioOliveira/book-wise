import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/layouts'
import {
  BookContent,
  Container,
  HeaderProfile,
  ProfileContainer,
  ProfileInformation,
  RatedBooks,
} from './styles'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

import { Book, User, Rating } from '@prisma/client'
import { BookCard } from '@/components/BookCard'
import { getFormattedDate } from '@/utils/getFomattedDate'
import { Search } from '@/components/Search'

import { PiUser } from 'react-icons/pi'

type UserInfo = User & {
  ratings: Rating[]
  _count: {
    ratings: number
  }
}

type RatedBooksType = Book & {
  ratings: Rating[]
}

interface UserProfileInformationType {
  userInfo: UserInfo
  ratedBooks: RatedBooksType[]
}

const ProfilePage: NextPageWithLayout = () => {
  const session = useSession()

  const [search, setSearch] = useState('')

  const router = useRouter()

  if (session.status === 'unauthenticated') {
    router.push('/login')
  }

  const { data } = useQuery<UserProfileInformationType>({
    queryKey: ['user-rated-userInfomations', session.data?.user.id],
    queryFn: async () => {
      const userInfomations = await api(`user/${session?.data?.user.id}`)

      return userInfomations.data?.userProfileInformation ?? {}
    },
  })

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  const filteredBooks = data?.ratedBooks?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <ProfileContainer>
      <Container>
        <HeaderProfile>
          <div>
            <PiUser size={32} />
            <h1> Perfil</h1>
          </div>

          <Search
            searchValue={search}
            handleSearch={handleSearch}
            size="large"
            placeholder=""
          />
        </HeaderProfile>
        <RatedBooks>
          {filteredBooks &&
            filteredBooks.map(({ ratings, ...rest }) => {
              return (
                <BookContent key={rest.id}>
                  <span>{getFormattedDate(rest.created_at, true)}</span>
                  <BookCard
                    book={{ bookInfo: rest, rating: ratings[0].rate }}
                    size="large"
                    key={rest.id}
                  />
                </BookContent>
              )
            })}
        </RatedBooks>
      </Container>
      <ProfileInformation>Profoile information</ProfileInformation>
    </ProfileContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfilePage
