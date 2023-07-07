import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const categories = await prisma.category.findMany({
    orderBy: {
      books: {
        _count: 'desc',
      },
    },
    take: 8,
  })

  return res.json({ categories })
}
