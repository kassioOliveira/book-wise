import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  })

  const ratingsWithMoreStars = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const booksWithMoreRatings = books
    .map((book) => {
      const booksRatings = ratingsWithMoreStars.find(
        (avgRating) => avgRating.book_id === book.id,
      )

      const { ratings, ...bookInfo } = book

      return {
        bookInfo,
        avgRating: booksRatings?._avg.rate,
      }
    })
    .sort((a, b) =>
      a.avgRating && b.avgRating ? b.avgRating - a.avgRating : 0,
    )

  return res.json({ books: booksWithMoreRatings })
}
