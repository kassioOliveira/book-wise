import * as Dialog from '@radix-ui/react-dialog'

import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Book, CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { RatingStars } from '../RatingStars'
import { BookRatings } from '../BookRatings'

import { CgClose } from 'react-icons/cg'
import { PiBookmarkSimpleBold, PiBookOpenBold } from 'react-icons/pi'

type RatingsDialogProps = {
  bookId: string
  children: ReactNode
}

type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type RatingWithAuthor = Rating & {
  user: User
}

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

export function SidePainel({ bookId, children }: RatingsDialogProps) {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true)
    }
  }, [bookId, paramBookId])

  const { data: book } = useQuery<BookDetails>(
    ['book', bookId],
    async () => {
      const { data } = await api.get(`/books/details/${bookId}`)
      return data.book ?? {}
    },
    {
      enabled: open,
    },
  )

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explorar?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explorar', undefined, { shallow: true })
    }

    setOpen(open)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <CgClose size={24} />
          </DialogClose>
          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    width={171}
                    height={242}
                    alt={book.name}
                    src={book.cover_url}
                  />
                  <BookContent>
                    <div>
                      <strong>{book.name}</strong>
                      <br />
                      <span>{book.author}</span>
                    </div>

                    <div>
                      <RatingStars rate={book.avgRating} justSee />
                      <span>{book.ratings.length} avaliações</span>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <div>
                    <span>
                      <PiBookmarkSimpleBold size={24} /> Categoria
                    </span>

                    <strong>
                      {book &&
                        book.categories
                          .map((category) => category.category.name)
                          .join(', ')}
                    </strong>
                  </div>

                  <div>
                    <span>
                      <PiBookOpenBold size={24} /> Páginas
                    </span>
                    <strong>{book && book.total_pages}</strong>
                  </div>
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings bookId={bookId} ratings={book.ratings} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
