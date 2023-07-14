import { prisma } from '@/lib/prisma'
import { getMostFrequent } from '@/utils/getMostFrequent'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = req.query.id

  if (!userId) return res.status(401).end()

  const userInfo = await prisma.user.findUnique({
    where: {
      id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
    },
    include: {
      ratings: true,
      _count: {
        select: {
          ratings: true,
        },
      },
    },
  })

  const ratedBooks = await prisma.book.findMany({
    where: {
      id: {
        in: userInfo?.ratings.map((rating) => rating.book_id),
      },
    },
    include: {
      ratings: {
        where: {
          id: {
            in: userInfo?.ratings.map((rating) => rating.id),
          },
        },
      },
      categories: {
        where: {
          book_id: {
            in: userInfo?.ratings.map((rating) => rating.book_id),
          },
        },
      },
    },
  })

  const ratedBooksCategory = ratedBooks
    .map((book) => book.categories.map((c) => c.categoryId))
    .flat(1)

  const category = await prisma.category.findMany({})

  const filtedCategory = category.filter((c) =>
    ratedBooksCategory.includes(c.id),
  )

  const categoryId = filtedCategory.map((category) => category.id)

  const mostFrequent = getMostFrequent(categoryId)
  const moreReadCategory = filtedCategory.filter((c) => c.id === mostFrequent)

  return res.json({
    userProfileInformation: {
      userInfo,
      ratedBooks,
      moreReadCategory: moreReadCategory[0],
    },
  })
}
