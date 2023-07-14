import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/layouts'
import {
  BookContent,
  Container,
  HeaderInformation,
  HeaderProfile,
  InformationBox,
  InformationContent,
  ProfileContainer,
  ProfileInformation,
  RatedBooks,
} from './styles'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'

import { Book, User, Rating, Category, CategoriesOnBooks } from '@prisma/client'
import { BookCard } from '@/components/BookCard'
import { getFormattedDate } from '@/utils/getFomattedDate'
import { Search } from '@/components/Search'

import {
  PiUser,
  PiBooks,
  PiBookOpenBold,
  PiUserListFill,
  PiBookmarkSimpleBold,
} from 'react-icons/pi'
import { Avatar } from '@/components/Avatar'

type UserInfo = User & {
  ratings: Rating[]
  _count: {
    ratings: number
  }
}

type RatedBooksType = Book & {
  ratings: Rating[]
  categories: CategoriesOnBooks[]
}

interface UserProfileInformationType {
  userInfo: UserInfo
  ratedBooks: RatedBooksType[]
  moreReadCategory: Category
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

  const pagesRead = data?.ratedBooks
    .map((book) => book.total_pages)
    .reduce((previus, current) => previus + current, 0)

  const authourRead = data?.ratedBooks.map((book) => book.author)
  const countAuthor = authourRead?.reduce(
    (previus: string[], current: string) => {
      if (!previus.includes(current)) {
        previus.push(current)
      }

      return previus
    },
    [],
  ).length

  const ratedBooks = data?.userInfo.ratings.length

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
      <div>
        <ProfileInformation>
          <HeaderInformation>
            <Avatar src={data?.userInfo.avatar_url} size="lg" alt="" />
            <div>
              <strong>{data?.userInfo.name}</strong>
              <span>membro desde 2019</span>
            </div>
            <hr />
          </HeaderInformation>
          <InformationContent>
            <InformationBox>
              <PiBookOpenBold size={32} />
              <div>
                <strong>{!!pagesRead && pagesRead}</strong>
                <span>Páginas lidas</span>
              </div>
            </InformationBox>
            <InformationBox>
              <PiBooks size={32} />
              <div>
                <strong>{!!ratedBooks && ratedBooks}</strong>
                <span>Livros avaliados</span>
              </div>
            </InformationBox>
            <InformationBox>
              <PiUserListFill size={32} />
              <div>
                <strong>{!!countAuthor && countAuthor}</strong>
                <span>Autores lidos</span>
              </div>
            </InformationBox>
            <InformationBox>
              <PiBookmarkSimpleBold size={32} />
              <div>
                <strong>
                  {!!data?.moreReadCategory && data?.moreReadCategory.name}
                </strong>
                <span>Categoria mais lida</span>
              </div>
            </InformationBox>
          </InformationContent>
        </ProfileInformation>
      </div>
    </ProfileContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfilePage
